class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  set(key, value) {
    let hash = this._hash(key);
    this.data[hash] = [];
    this.data[hash].push([key, value]);
  }

  get(key, value) {
    let hash = this._hash(key);
    console.log(this.data);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if ((this.data[hash][i][0] = key)) {
          return this.data[hash][i][1];
        }
        return "No value";
      }
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.set("apple", 8989);
myHashTable.get("apple");
