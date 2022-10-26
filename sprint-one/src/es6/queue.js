class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size() + 1] = value;
  }

  dequeue() {
    var oldestItem = this.storage[1];
    for (var key in this.storage) {
      if (key < this.size()) {
        this.storage[key] = this.storage[Number(key) + 1];
      } else {
        delete this.storage[key];
      }
    }
    return oldestItem;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
