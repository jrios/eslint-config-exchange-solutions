/* eslint id-length: 0, no-alert: 0, no-unused-vars: 0 */

alert(a);
const a = 10;

f();
function f() {}

function g() {
  return b;
}
const b = 1;

// error 3:7 no-use-before-define - "a" was used before it was defined
// error 6:1 no-use-before-define - "f" was used before it was defined
// error 10:10 no-use-before-define - "b" was used before it was defined
