'use strict';

function countSameElements(collection) {
  var result = new Map();
  var resultList = [];

  for (let i = 0; i < collection.length; i++) { 
    if (result.get(collection[i]) == null) {
      result.set(collection[i], 1);
    } else {
      result.set(collection[i], result.get(collection[i])+1);
    }
  }

  result.forEach(function (key, value) {
    resultList.push({key: value, count: key});
  })
  return resultList;
}
