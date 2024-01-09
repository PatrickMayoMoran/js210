var a;
a();

function a() {
  console.log('I\'ve been hoisted!');
}

let b;
b();

function b() {
  console.log('Temporal Dead Zone...');
}
