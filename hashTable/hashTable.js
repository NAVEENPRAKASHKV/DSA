class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + hash.charCode(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}
