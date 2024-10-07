// Predefined attendance records
const predefinedAttendanceRecords = [
    { employee: "Aryan Kaushal", date: "2024-10-01", status: "Present" },
    { employee: "Hardik", date: "2024-10-01", status: "Absent" },
    { employee: "Aryan Kaushal", date: "2024-10-02", status: "Present" },
    { employee: "Hardik", date: "2024-10-02", status: "Present" }
];

// Store predefined records in local storage if not already stored
if (!localStorage.getItem("attendanceRecords")) {
    localStorage.setItem("attendanceRecords", JSON.stringify(predefinedAttendanceRecords));
}

// Function to display all attendance records
function displayAllAttendance() {
    let attendanceRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const attendanceTableBody = document.getElementById("attendanceRecords");
    attendanceTableBody.innerHTML = "";

    if (attendanceRecords.length === 0) {
        attendanceTableBody.innerHTML = "<tr><td colspan='4'>No attendance records available</td></tr>";
        return;
    }

    // Display all attendance records
    attendanceRecords.forEach((record, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.employee}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
            <td><button class="edit-button" onclick="editAttendance(${index})">Edit</button></td>
        `;
        attendanceTableBody.appendChild(row);
    });
}

// Function to add or edit attendance record
document.getElementById("addAttendanceForm").onsubmit = function (e) {
    e.preventDefault();

    let attendanceRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const editIndex = document.getElementById("editIndex").value;

    const employee = document.getElementById("attendanceEmployee").value;
    const date = document.getElementById("attendanceDate").value;
    const status = document.getElementById("attendanceStatus").value;

    if (editIndex === "") {
        // Add new attendance record
        attendanceRecords.push({ employee, date, status });
    } else {
        // Edit existing attendance record
        attendanceRecords[editIndex] = { employee, date, status };
        document.getElementById("submitButton").textContent = "Add Attendance";
    }

    // Store updated attendance records in local storage
    localStorage.setItem("attendanceRecords", JSON.stringify(attendanceRecords));

    // Refresh attendance display
    displayAllAttendance();

    // Clear form
    this.reset();
};

// Function to edit attendance record
function editAttendance(index) {
    let attendanceRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    const record = attendanceRecords[index];

    document.getElementById("attendanceEmployee").value = record.employee;
    document.getElementById("attendanceDate").value = record.date;
    document.getElementById("attendanceStatus").value = record.status;
    document.getElementById("editIndex").value = index;

    document.getElementById("submitButton").textContent = "Update Attendance";
}

// Call the function to display all attendance records on page load
window.onload = function () {
    displayAllAttendance();
};

// Logout function (example)
function logout() {
    // Logic to log out the user
    alert("You have logged out.");
}
