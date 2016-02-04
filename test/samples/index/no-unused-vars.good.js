/* eslint no-alert: 0, no-undef: 0 */

const x = 10;
alert(x);

(function selfInvoking(foo) {
  return foo;
}());
