// Syntactic Sugar
function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}

// Classic
function foo(bar, qux, baz) {
  return {
    bar: bar,
    qux: qux,
    baz: baz,
  };
}
