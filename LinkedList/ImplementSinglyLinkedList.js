class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverse(n) {
    let currentNode = this.head;
    for (let i = 0; i < n; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.head;
      prevNode = this.traverse(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prevNode = this.traverse(index - 1);
    if (index === this.length - 1) {
      prevNode.next = null;
      return;
    }
    prevNode.next = prevNode.next.next;
  }
}

let myList = new LinkedList(5);
myList.append(10);
myList.prepend(43);
myList.insert(1, 67);
myList.remove(1);
myList.printList();
