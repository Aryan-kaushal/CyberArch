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



const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();

function getRandomAttendance() {
    return Math.random() < 0.5 ? 'present' : 'absent'; // 50% chance for each
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    daysContainer.innerHTML = '';
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    // Blank days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const blankDay = document.createElement('div');
        blankDay.classList.add('day');
        daysContainer.appendChild(blankDay);
    }

    // Days of the month with random attendance
    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.innerText = i;

        // Randomly assign present or absent class
        const attendance = getRandomAttendance();
        day.classList.add(attendance);

        daysContainer.appendChild(day);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();