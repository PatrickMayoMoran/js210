function closureCounter() {
  let counter = 0;
  function uniqueCounter() {
    counter += 1;
    console.log(counter);
  };

  return uniqueCounter;
};

let counter1 = closureCounter();
let counter2 = closureCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3
counter2(); // 1
counter2(); // 2
counter2(); // 3
