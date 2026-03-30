class TrieNode {
    constructor() {
        this.children = new Map() 
        this.isEnd = false
    }
} 
 
 
class WordDictionary {
    constructor() { 
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) { 
        let node = this.root 

        for (const c of word) {
            if (!node.children.get(c)) {
                node.children.set(c, new TrieNode())
            } 
            node = node.children.get(c)
        } 

        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */ 

    dfs(node, j, word) {
        for (let i = j; i < word.length; i ++) {
            let cur = word[i] 
            if (cur === '.') {
                for (const child of Array.from(node.children.values())) {
                    if (this.dfs(child, i + 1, word)) {
                        return true
                    }
                } 
                return false
            } else {
                if (!node.children.get(cur)) {
                    return false
                } 
                node = node.children.get(cur)
            }
        } 

        return node.isEnd
    }
    search(word) { 
       return this.dfs(this.root, 0, word)
    }
}
