
exports.min = function min (array) {

  let min = 0;

  if (array === undefined) {
    return min;
  };

  array.forEach(element => {
    if (element <= min) {
      min = element;
    } 
  });

  return min
}

exports.max = function max (array) {

  let max = 0;
  
  if (array === undefined) {
    return max;
  };

  array.forEach(element => {
    if (element >= max) {
      max = element;
    }
  });
  return max
}

exports.avg = function avg (array) {

  let avg = 0
  
  if (array === undefined) {
    return avg;
  };

  let sum = 0
  array.forEach(element => {
    sum += element
  });
  
  avg = sum / array.length || 0;

  return avg
}
