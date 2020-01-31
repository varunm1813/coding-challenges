class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    if (this.length === 0) {
      this.bottom = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return "Stack is empty";
    }
    let val = this.top.value;
    this.top = this.top.next;
    if (this.length === 1) {
      this.bottom = null;
    }
    this.length--;
    return val;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("Discord");
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
//Discord
//Udemy
//google
