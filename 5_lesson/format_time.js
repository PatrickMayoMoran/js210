let today = new Date();

function formatTime(day) {
  let minutes = today.getMinutes();
  let hours = today.getHours();
  minutes = minutes.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

console.log(formatTime(today));
