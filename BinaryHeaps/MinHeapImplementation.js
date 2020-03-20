class Heap {
  constructor() {
    this.arr = [];
  }

  parent(i) {
    if (i < this.arr.length) {
      return Math.floor((i - 1) / 2);
    } else return false;
  }

  leftChild(i) {
    if (i < this.arr.length - 1) {
      return 2 * i + 1;
    } else return false;
  }

  rightChild(i) {
    if (i < this.arr.length - 2) {
      return 2 * i + 2;
    } else return false;
  }

  peek() {
    if (this.arr.length) {
      return this.arr[0];
    } else return false;
  }

  insert(item) {
    this.arr.push(item);
    this.heapifyUp();
  }

  remove() {
    if (this.arr.length) {
      let item = this.arr[0];
      this.arr[0] = this.arr[this.arr.length - 1];
      this.heapifyDown();
      return item;
    } else {
      return false;
    }
  }

  hasParent(index) {
    if (index >= 0) return true;
    else return false;
  }

  swap(left, right) {
    let item = this.arr[left];
    this.arr[left] = this.arr[right];
    this.arr[right] = item;
  }

  heapifyUp() {
    let index = this.arr.length - 1;
    let parentIndex = this.parent(index);
    while (
      this.hasParent(parentIndex) &&
      this.arr[parentIndex] > this.arr[index]
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let smallChildIndex = this.leftChild(index);
    while (smallChildIndex) {
      if (
        this.rightChild(index) &&
        this.arr[this.leftChild(index)] > this.arr[this.rightChild(index)]
      ) {
        smallChildIndex = this.rightChild(index);
      }
      if (this.arr[index] < this.arr[smallChildIndex]) break;
      else {
        this.swap(smallChildIndex, index);
      }
      smallChildIndex = this.leftChild(smallChildIndex);
    }
  }
}

let queue = new Heap();

queue.insert(10);
queue.insert(8);
queue.insert(5);
queue.insert(2);
queue.insert(9);
queue.insert(3);
queue.remove();
console.log(queue);
