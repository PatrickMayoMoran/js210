function evenOrOdd(number) {
  let remainder = number % 2;
  switch (remainder) {
    case 0:
      console.log('Even');
      break;
    case 1:
      console.log('Odd');
      break;
    default:
      console.log(remainder)
      console.log('Something Went Wrong');
      break;
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('cat');
