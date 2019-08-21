'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var subCollectionB = objectB.value;
  for (let i = 0; i < subCollectionB.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if (subCollectionB[i] === collectionA[j].key) {
        collectionA[j].count--;
      }      
    } 
  }
  return collectionA;
}
