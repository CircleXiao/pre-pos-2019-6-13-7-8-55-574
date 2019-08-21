'use strict';

function countSameElements(collection) {
  const result = new Map();
  const resultList = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length != 1) {
      var keyStr = collection[i].charAt(0);
      var valueNum = parseInt(collection[i].substr(2, collection[i].length-2));
      if (result.get(keyStr) == null) {
        result.set(keyStr, valueNum);
      } else {
      result.set(keyStr, result.get(keyStr) + valueNum);
      }
    } else {
      if (result.get(collection[i]) == null) {
        result.set(collection[i], 1);
      } else {
        result.set(collection[i], result.get(collection[i]) + 1);
      }
    }   
  }

  result.forEach(function (key, value) {
    resultList.push({name: value, summary: key});
  });

  console.log(resultList);
  return resultList;
  
}
