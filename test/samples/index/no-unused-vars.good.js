/* eslint no-alert: 0, no-undef: 0 */

const x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
  // ...
});

(function selfInvoking(foo) {
  return foo;
})();
