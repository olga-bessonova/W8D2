// Arrays //
// Array#uniq

Array.prototype.uniq = function() {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (res.indexOf(this[i]) === -1) {
      res.push(this[i]);
    }
  }

  return res;
};
console.log([1, 2, 2, 3, 3, 3].uniq());





// Array#twoSum
Array.prototype.twoSum = function() {
  let res = [];

  for (let i = 0; i < this.length-1; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        res.push([i, j]);
      }
    }
  }


  return res;
};
console.log([1, 0, 2, -2, -1].twoSum());





// Array#transpose
Array.prototype.transpose = function() {
  const res = [];
  
  for (let i = 0; i < this[0].length; i++) {
    res[i] = [];
    
    for (let j = 0; j < this.length; j++) {
      res[i][j] = this[j][i];
    }
  }
  
  return res;
}

console.log([[0, 1], [2, 3]].transpose());
