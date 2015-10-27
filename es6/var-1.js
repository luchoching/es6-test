function getValue(condition){
  if (condition){
    var value = 'blue';
    console.log(value);
  } else {
    console.log(value);
    return null;
  }
  console.log(value);
}

getValue(false);
