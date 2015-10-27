'use strict';

let person = ((name)=>{
  return {
    getName: ()=>name
  };
})('Nicolas');

console.log(person.getName());
