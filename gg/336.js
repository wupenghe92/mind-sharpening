/**
 * @param {string[]} words
 * @return {number[][]}
 */

function TrieNode() {
    this.children = {};
    this.index = null;
    this.list = [];
}

TrieNode.prototype.insert = function(word, idx) {
    let current = this;
    for (let i=word.length-1; i>=0; i--) {
        if (!current.children[word[i]]) {
            current.children[word[i]] = new TrieNode();
        }
        if (isPalindrome(word, 0, i)) {
            current.list.push(idx);
        }
        current = current.children[word[i]];
    }
    current.index = idx;
    current.list.push(idx);
}

TrieNode.prototype.search = function(words, i, res) {
    let current = this;
    for (let j = 0; j < words[i].length; j++) {
        if (current.index !== null && current.index !== i && isPalindrome(words[i], j, words[i].length-1)) {
            res.push([i, current.index]);
        }
    	  if (!current.children[words[i][j]]) return;
        current = current.children[words[i][j]];
    }

    for (let j of current.list) {
    	if (i !== j) {
            res.push([i, j]);
        };
    }
}

var palindromePairs = function(words) {
    const res = [];
    const trie = new TrieNode();
    for (let i=0; i<words.length; i++) {
        trie.insert(words[i], i);
    }
    for (let i=0; i<words.length; i++) {
        trie.search(words, i, res);
    }
    return res;
}


function isPalindrome(word, i, j) {
    while (i < j) {
        if (word[i] !== word[j]) return false;
        i++;
        j--;
    }
    return true;
}

const words = ["abcd","dcba","lls","s","sssll"];
console.log(palindromePairs(words));
