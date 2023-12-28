let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
console.log(myObj);
console.log(myObj.foo);
