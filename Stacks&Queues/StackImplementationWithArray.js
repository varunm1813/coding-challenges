class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    let val = this.data[this.data.length - 1];
    this.data.pop();
    return val;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("Discord");
myStack.peek();
//Discord
//Udemy
//google
