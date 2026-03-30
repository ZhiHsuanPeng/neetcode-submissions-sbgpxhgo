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
        for (const c of word) {
            if (!node.children.get(c)) {
                node.children.set(c, new Node())
            } 
            node = node.children.get(c)
        } 

        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) { 
        let node = this.root 
        for (const c of word) {
            if (!node.children.get(c)) {
                return false
            } 
            node = node.children.get(c)
        } 

        return node.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) { 
        let node = this.root 
        for (const c of prefix) {
            if (!node.children.get(c)) {
                return false
            } 
            node = node.children.get(c)
        }  
        return true
    }
}
