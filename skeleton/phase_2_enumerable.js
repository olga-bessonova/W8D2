// Enumerable
// Array#myEach
Array.prototype.myEach = function(callback){
  let i = 0;

  while (i < this.length){
    let el = this[i];
    callback()
    i++;
  }
}


// Array#myMap
Array.prototype.myMap = function(cb) { 
  const results = [];

  this.myEach(function(el){
    const updatedEl = cb(el);
    results.push(cb(el));
  });

  return results;
};

console.log([1,2,3,4].myMap( el => el + 2));



// Array#myInject
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
}

console.log([1,2,3,4,5].myReduce( (accum, el) => accum + el));
