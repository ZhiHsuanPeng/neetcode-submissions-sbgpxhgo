class Node {
    constructor() {
        this.isEnd = false 
        this.desc = new Map()
    }
}

class WordDictionary {
    constructor() { 
        this.root = new Node() 
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) { 
        let node = this.root 

        for (const w of word) {
            if (!node.desc.get(w)) {
                node.desc.set(w, new Node())
            } 

            node = node.desc.get(w)
        } 

        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) { 
        return this.dfs(0, word, this.root)
    } 

    dfs(i, word, node) { 
        if (i === word.length) return node.isEnd
        let cur = word[i] 
        if (cur === '.') {
            for (const children of node.desc.values()) {
                if (this.dfs(i + 1, word, children)) {
                    return true
                }
            } 
            return false
        } else {
            if (!node.desc.get(cur)) {
                return false
            } 

            return this.dfs(i + 1, word, node.desc.get(cur))
        }
    }
}
