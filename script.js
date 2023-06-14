const yearInput = document.getElementById('year-input');
const dayInput = document.getElementById('day-input');
const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');
const secondInput = document.getElementById('second-input');
const ticksInput = document.getElementById('ticks-input');
const resultTicks = document.getElementById('result-ticks');
const resultTime = document.getElementById('result-time');

yearInput.addEventListener('input', convertToTicks);
dayInput.addEventListener('input', convertToTicks);
hourInput.addEventListener('input', convertToTicks);
minuteInput.addEventListener('input', convertToTicks);
secondInput.addEventListener('input', convertToTicks);
ticksInput.addEventListener('input', convertToTime);

function convertToTicks() {
  const year = parseInt(yearInput.value) || 0;
  const day = parseInt(dayInput.value) || 0;
  const hour = parseInt(hourInput.value) || 0;
  const minute = parseInt(minuteInput.value) || 0;
  const second = parseInt(secondInput.value) || 0;
  
  const ticks = (year * 630720000) + (day * 1728000) + (hour * 72000) + (minute * 1200) + (second * 20);
  
  if (ticks === 0) {
    resultTicks.textContent = '';
  } else {
    resultTicks.textContent = "Ticks: " + ticks;
  }
}

function convertToTime() {
  const ticks = parseInt(ticksInput.value) || 0;
  
  const year = Math.floor(ticks / 630720000);
  const day = Math.floor((ticks % 630720000) / 1728000);
  const hour = Math.floor((ticks % 1728000) / 72000);
  const minute = Math.floor((ticks % 72000) / 1200);
  const second = Math.floor((ticks % 1200) / 20);
  
  if (year === 0 && day === 0 && hour === 0 && minute === 0 && second === 0) {
    resultTime.textContent = '';
  } else {
    resultTime.textContent = `${year} Años ${day} Dias ${hour} Horas ${minute} Minutos ${second} Segundos`;
  }
}