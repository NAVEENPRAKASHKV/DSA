class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  // hash function to find the hashcode and index for the corresponding hash key
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  // to set the key and corrsponding value in the hash table
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    // to check the key is already existed then update value
    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        this.dataMap[index][i][1] = value;
        return this;
      }
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  //method to find the value corresponding to the key
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }
  // method to find all the key in the hash table
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
  display() {
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          console.log(`${this.dataMap[i][j][0]}: ${this.dataMap[i][j][1]}`);
        }
      }
    }
  }
}

const hashTable = new HashTable(9);
hashTable.set("naveen12123", "prakash");
hashTable.set("naveen", "pr");
console.log(hashTable.keys());
