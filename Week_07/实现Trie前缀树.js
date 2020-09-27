class TrieNode{
    constructor(){
        this.END = false;
        this.children = {};
    }
}
let root = null;
 
var Trie = function() {
    root  = new TrieNode();
};

 
Trie.prototype.insert = function(word) {
    let currNode = root;
    for(let i = 0;i < word.length;i++){
        if(currNode.children[word[i]] == undefined){
            currNode.children[word[i]] = new TrieNode();
        }
        currNode = currNode.children[word[i]];
    }
    currNode.END = true;
};
let searchPrefix = (word) => {
    let currNode = root;
    for(let i = 0;i < word.length;i++){
        if(currNode.children[word[i]]){
            currNode = currNode.children[word[i]];
        }else{
            return null;
        }
    }
    return currNode;
}
 
Trie.prototype.search = function(word) {
    let currNode = searchPrefix(word);
    return currNode != null && currNode.END;
};
 
Trie.prototype.startsWith = function(prefix) {
    return searchPrefix(prefix) != null;
};

 