'use strict';

var funcs = [];

for(let i=0; i<10;i++){
  funcs.push((function(value){
    return function(){
      console.log(value);
    };
  })(i));
}

funcs.forEach((func)=>func());
