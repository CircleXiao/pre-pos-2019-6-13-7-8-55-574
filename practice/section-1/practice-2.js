'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var b = collectionB[0];
  for (var i=0; i <collectionA.length; i++) {
    var temp = collectionA[i];
    for (var j=0; j<b.length; j++) {
      if (temp === b[j]) {
        result.push(temp);
        break;
      }
    }
  }
  return result;
}
