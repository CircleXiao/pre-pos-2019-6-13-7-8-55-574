'use strict';

function removeRepeat(collectionA) {
  var r = [];
  for (var i=0; i<collectionA.length; i++) {
    var flag = true;
    var temp = collectionA[i];
    for (var j=0; j<r.length; j++) {
      if(temp === r[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
      r.push(temp);
    }
  }
  return r;
}

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var b = collectionB['value'];
  for (var i=0; i<collectionA.length; i++) {
    var temp = collectionA[i];
    for (var j=0; j<b.length; j++) {
      if (temp === b[j]) {
        result.push(temp);
        break;
      }
    }
  }
  return removeRepeat(result);
}
