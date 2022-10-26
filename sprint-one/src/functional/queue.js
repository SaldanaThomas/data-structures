var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size() + 1] = value;
  };

  someInstance.dequeue = function() {
    var oldestValue = storage[1];
    for (var key in storage) {
      if (key < someInstance.size()) {
        storage[key] = storage[Number(key) + 1];
      } else {
        delete storage[key];
      }
    }
    return oldestValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
