today = new Date();

let getWeekDay = day => {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[day];
};

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

console.log(`Today's date is ${getWeekDay(today.getDay())} the ${dateSuffix(today.getDate())}.`);
