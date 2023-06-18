function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  
  left = mergeSort(left);
  right = mergeSort(right);
  
  return merge(left, right);
}

function merge(left, right) {
  var result = [];
  var i = 0;
  var j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  
  return result;
}

