'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var subCollectionB = collectionB['value'];
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < subCollectionB.length; j++) {
      if (collectionA[i].key === subCollectionB[j]) {
        result.push(collectionA[i].key);
      }      
    }    
  }
  return result;
}
