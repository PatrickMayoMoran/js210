var qux = 2;
function foo() {
  var qux = 1;
  bar();
}

function bar() {
  console.log(qux);
}

foo();  // logs 2 - qux on line 8 is enclosed from the global scope of the function,
// not the qux on line 3 from going back through the call stack
