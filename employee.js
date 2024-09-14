// JavaScript for the Calendar

// Get Elements
const monthYear = document.getElementById('month-year');
const datesContainer = document.querySelector('.calendar-dates');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Initialize date variables
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Function to render the calendar
function renderCalendar(month, year) {
  datesContainer.innerHTML = ''; // Clear previous dates
  monthYear.innerText = `${months[month]} ${year}`;

  // Get first and last day of the current month
  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  // Fill in the empty spaces before the 1st day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    datesContainer.appendChild(emptyCell);
  }

  // Fill in the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateCell = document.createElement('div');
    dateCell.innerText = day;

    // Highlight today
    if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
      dateCell.classList.add('today');
    }

    datesContainer.appendChild(dateCell);
  }
}

// Navigate to previous month
prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

// Navigate to next month
nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initial render of the current month
renderCalendar(currentMonth, currentYear);



$("#calendar").evoCalendar();