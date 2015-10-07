alert(a);
let a = 10;

f();
function f() {}

function g() {
    return b;
}
let b = 1;

//error 1:7 no-use-before-define - a was used before it was defined
//error 5:10 no-use-before-define - f was used before it was defined
//error 8:12 no-use-before-define - b was used before it was defined
