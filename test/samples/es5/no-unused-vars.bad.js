/* eslint */

var x;

var y = 10;
y = 5;

// Unused recursive functions also cause warnings.
function fact(n) {
  if (n < 2) return 1;
  return n * fact(n - 1);
}

// error 3:5 no-unused-vars - "x" is defined but never used
// error 5:5 no-unused-vars - "y" is defined but never used
// error 9:10 no-unused-vars - "fact" is defined but never used
// warning 9:15 id-length - Identifier name 'n' is too short. (< 3)
