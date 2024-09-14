document.addEventListener('DOMContentLoaded', function() {
    // Initialize Evo Calendar
    $('#attendance-calendar').evoCalendar({
        theme: "Royal Navy", // Calendar theme
        format: "MM dd, yyyy",
        titleFormat: "MM yyyy",
        todayHighlight: true
    });

    // Sample Attendance Data
    const attendanceData = {
        "2024-09-01": "present",
        "2024-09-02": "absent",
        "2024-09-03": "present",
        "2024-09-04": "absent",
        "2024-09-05": "present",
        "2024-09-06": "present",
        "2024-09-07": "absent",
        "2024-09-08": "present"
    };

    let presentDays = 0;
    let totalDays = Object.keys(attendanceData).length;

    // Mark attendance in calendar and count present days
    Object.keys(attendanceData).forEach(function(date) {
        let type = attendanceData[date];
        if (type === "present") {
            $('#attendance-calendar').evoCalendar('addCalendarEvent', {
                id: date, // Unique ID for the event
                name: "Present", // Event name
                date: date, // Date of the event
                type: "holiday", // Green for Present
                color: "#28a745"
            });
            presentDays++;
        } else if (type === "absent") {
            $('#attendance-calendar').evoCalendar('addCalendarEvent', {
                id: date, // Unique ID for the event
                name: "Absent", // Event name
                date: date, // Date of the event
                type: "holiday", // Red for Absent
                color: "#dc3545"
            });
        }
    });

    // Calculate and display attendance percentage
    let attendancePercentage = (presentDays / totalDays) * 100;
    document.getElementById("attendance-percent").innerText = attendancePercentage.toFixed(2) + "%";
});
