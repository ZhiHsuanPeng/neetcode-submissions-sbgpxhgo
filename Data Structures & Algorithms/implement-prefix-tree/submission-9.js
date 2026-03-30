class Node {
    constructor() {
        this.children = new Map() 
        this.isEnd = false
    }
} 
 
class PrefixTree {
    constructor() { 
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) { 
        let node = this.root 

        for (const w of word) {
            if (node.children.has(w)) {
                node = node.children.get(w)
            } else {
                node.children.set(w, new Node()) 
                node = node.children.get(w)
            }
        } 

        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) { 
        let node = this.root 

        for (const w of word) {
            if (!node.children.has(w)) {
                return false
            } else {
                node = node.children.get(w)
            }
        } 

        return node.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) { 
         let node = this.root 

        for (const w of prefix) {
            if (!node.children.has(w)) {
                return false
            } else {
                node = node.children.get(w)
            }
        }  

        return true
    }
}
