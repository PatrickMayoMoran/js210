today = new Date();

let getWeekDay = day => {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[day];
};

let getMonthName = month => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

let dateSuffix = function (date) {
  date = String(date);
  let suffix;

  switch (date) {
    case '1':
    case '21':
    case '31':
      suffix = 'st';
      break;
    case '2':
    case '22':
      suffix = 'nd';
      break;
    case '3':
    case '23':
      suffix = 'rd';
      break;
    default:
      suffix = 'th'
      break;
  }

  return date + suffix;
}

function formattedDate(date) {
  let month = getMonthName(date.getMonth());
  let weekday = getWeekDay(date.getDay());
  let day = dateSuffix(date.getDate());

  return `${weekday}, ${month} the ${day}`;
}

console.log(`Today's date is ${formattedDate(today)}.`);

let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(`Tomorrow's date is ${formattedDate(tomorrow)}.`);

let nextWeek = new Date(today.getTime());
console.log(`Two days are equal?`);
console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(`Next week's date is ${formattedDate(nextWeek)}.`);
console.log(`Two days are equal?`);
console.log(today.toDateString() === nextWeek.toDateString());
