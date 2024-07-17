// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const button = document.querySelector('button');
const seconds = document.querySelector('span.value[data-seconds]');
const minutes = document.querySelector('span.value[data-minutes]');
const hours = document.querySelector('span.value[data-hours]');

const days = document.querySelector('span.value[data-days]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() < Date.now()) {
      button.disabled = true;
      alert('x');
    } else {
      button.disabled = false;
    }
  },
};

const dateTimeInput = document.querySelector('#datetime-picker');

flatpickr(dateTimeInput, options);

function handleBtnClick(event) {
  button.disabled = true;
  setInterval(() => {
    let diff = userSelectedDate - Date.now();
    seconds.textContent = String(convertMs(diff).seconds).padStart(2, '0');
    minutes.textContent = String(convertMs(diff).minutes).padStart(2, '0');
    hours.textContent = String(convertMs(diff).hours).padStart(2, '0');
    days.textContent = String(convertMs(diff).days).padStart(2, '0');
  }, 1000);
}

button.addEventListener('click', handleBtnClick);
