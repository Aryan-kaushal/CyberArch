document.addEventListener("DOMContentLoaded", function () {
    initializeCalendar();
    loadAttendanceData();
});

function initializeCalendar() {
    // Initialize Evo Calendar with RedTheme
    $('#attendance-calendar').evoCalendar({
        theme: 'RedTheme',
        todayHighlight: true,
    });
}

function loadAttendanceData() {
    // Mock attendance data
    const attendanceData = {
        present: [
            '2024-10-01',
            '2024-10-02',
            '2024-10-04',
            '2024-10-05',
            '2024-10-07',
            '2024-10-10'
        ],
        absent: [
            '2024-10-03',
            '2024-10-06',
            '2024-10-08',
            '2024-10-09'
        ]
    };

    // Calculate attendance percentage
    const totalDays = attendanceData.present.length + attendanceData.absent.length;
    if (totalDays > 0) {
        const attendancePercent = Math.round((attendanceData.present.length / totalDays) * 100);
        document.getElementById('attendance-percent').innerText = attendancePercent + "%";
    } else {
        document.getElementById('attendance-percent').innerText = "No Data";
    }

    // Add attendance events to calendar
    attendanceData.present.forEach(date => {
        $('#attendance-calendar').evoCalendar('addCalendarEvent', {
            id: 'present-' + date,
            name: 'Present',
            date: date,
            type: 'holiday', // Custom type to represent present
            color: '#4caf50' // Green color for present
        });
    });

    attendanceData.absent.forEach(date => {
        $('#attendance-calendar').evoCalendar('addCalendarEvent', {
            id: 'absent-' + date,
            name: 'Absent',
            date: date,
            type: 'holiday', // Custom type to represent absent
            color: '#ff0000' // Red color for absent
        });
    });
}

function logout() {
    // Implement logout functionality here
    alert("Logged out successfully!");
    window.location.href = 'index.html';
}
