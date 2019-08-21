'use strict';

function countSameElements(collection){
  const resultList = [];
  const result = new Map();

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length != 1) {
      result.set(collection[i].charAt(0), parseInt(collection[i].charAt(2)));
    } else {
      if (result.get(collection[i]) == null) {
        result.set(collection[i], 1);
      } else {
        result.set(collection[i], result.get(collection[i]) + 1);
      }
    }   
  }

  result.forEach(function (key, value) {
    resultList.push({key: value, count: key});
  })

  return resultList;
}
