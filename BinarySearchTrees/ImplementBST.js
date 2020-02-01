class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let cur = this.root;
      while (cur) {
        if (value < cur.value) {
          var temp = cur;
          cur = cur.left;
        } else {
          temp = cur;
          cur = cur.right;
        }
      }
      if (value < temp.value) {
        temp.left = newNode;
      } else {
        temp.right = newNode;
      }
    }
  }
  lookup(value) {
    let cur = this.root;
    while (cur) {
      if (cur.value === value) {
        return cur.value;
      } else if (value < cur.value) {
        cur = cur.left;
      } else if (value > cur.value) {
        cur = cur.right;
      }
    }

    return "value not found";
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
