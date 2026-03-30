class Node  {
    constructor() {
        this.isEnd = false 
        this.next = new Map() 
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
            if (!node.next.has(w)) {
                node.next.set(w, new Node())
            } 

            node = node.next.get(w)
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

    dfs(start, word, node) { 
        for (let i = start; i < word.length; i ++) { 
            let cur = word[i] 
            if (cur === '.') {
                for (const n of Array.from(node.next.values())) {
                    if (this.dfs(i + 1, word, n)) {
                        return true
                    } 
                } 

                return false
            } else {
                if (!node.next.has(cur)) {
                    return false
                } 

                node = node.next.get(cur)
            }
        }

        return node.isEnd
    }
}
