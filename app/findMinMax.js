'use strict';

var exports = module.exports = {};

exports.findMinMax = function(numArray)
{
  let max = Math.max.apply(null, numArray); 
  let min = Math.min.apply(null, numArray); 
  
  return min === max ? [min] : [min, max];  
};
