function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = -1;
  var numArray = [];
    for(var i = 0; i < list.length; i++){
      for(var j = 1; j > 0; j++){
        var randomNum = Math.floor(1 + Math.random() * 6);
        if(randomNum === list[i]){
          numArray.push(randomNum);
          break;
        }
      }
    }

  return function() {
    index += 1;
    return numArray[index];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

