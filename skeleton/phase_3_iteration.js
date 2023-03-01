// Iteration

//String#substring

String.prototype.substrings = function() {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      res.push(this.slice(i, j));
    }
  }

  return res;
};

const str = 'helloworld'
console.log(str.substrings);