// https://leetcode.com/problems/implement-trie-prefix-tree/description/

/**
 * Initialize your data structure here.
 */
function Trie() {
  this.children = {};
  // this.char = '';
  this.count = 1;   // count of the node
  this.value = 0;   // count of the key
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current  = this;
  for (let i=0; i<word.length; i++) {
    if (current.children[word[i]]) {
      current.children[word[i]].count++;
    } else {
      current.children[word[i]] = new Trie();
    }
    current = current.children[word[i]];
  }
  current.value++;
  return;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current  = this;
  for (let i=0; i<word.length; i++) {
    if (!current.children[word[i]]) return false;
    current = current.children[word[i]];
  }
  return current.value > 0;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let current  = this;
  for (let i=0; i<prefix.length; i++) {
    if (!current.children[prefix[i]]) return false;
    current = current.children[prefix[i]];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
