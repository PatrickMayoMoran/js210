// Original syntax, foo key with foo function expression
let myObject = {
  foo: function foo (who) {
    console.log(`hello ${who}`);
  },

  bar: function bar (x, y) {
    return x + y;
  },
};

let yourObject = {
  foo(who) {
    console.log(`hello ${who}`);
  },

  bar(x, y) {
    return x + y;
  },
};

myObject.foo('Mayo');
yourObject.foo('Mayo');
