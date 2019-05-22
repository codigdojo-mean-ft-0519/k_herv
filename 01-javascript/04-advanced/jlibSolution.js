// It's definitely a tough one to grapple with without a brief demonstration.  But what it's asking you to do is build out the suggested methods in that _ object to be like the methods from the underscorejs library.  Each one of those methods (if I remember correctly) needs an array and a function to run against that array (callback) as arguments.

// solution_1;
const _ = {
  map: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo) {
    let el = 0;
    if (!memo) {
      memo = array[0];
      el = 1;
    }
    for (let i = el; i < array.length; i++) {
      memo = callback(array[i], memo);
    }
    return memo;
  },
  find: function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  },
  filter: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
  reject: function(array, callback) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
  },
};

const array = [3, 4, 5];
_.map(array, function callback(x) {
  return x * 5;
});
console.log(array);
console.log(
  _.reduce(array, function callback(x, memo) {
    return x + memo;
  })
);

console.log('before find');
console.log(
  _.find(array, function callback(x) {
    return x === 15;
  })
);
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:
console.log(
  _.filter(array, function(x) {
    return x > 20;
  })
);
