var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size() + 1] = value;
  },

  pop: function() {
    var poppedItem = this.storage[this.size()];
    delete this.storage[this.size()];
    return poppedItem;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


