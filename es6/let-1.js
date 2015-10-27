'use strict';

var value = 'blue';

function getValue(condition){
  if (condition){
    let value = 'yello';
    console.log(value);
  } else {
    console.log(value);
    return null;
  }
  console.log(value);
}

getValue(false);
