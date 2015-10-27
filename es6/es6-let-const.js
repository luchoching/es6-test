'use strict';

function f() {
  let x;
  {
    const x = 'aaaa';
    console.log(x);
  }
}

f();
