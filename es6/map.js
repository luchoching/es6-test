'use strict';

let myMap = new Map();
myMap.set(0, '11111');
myMap.set(1, '343434');

for (let [key, value] of myMap) {
  console.log(key, value);
}
