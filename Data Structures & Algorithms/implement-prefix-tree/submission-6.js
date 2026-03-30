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
        let root = this.root 
        for (const c of word) {
            if (!root.children.get(c)) {
                root.children.set(c, new Node(c))
            } 

            root = root.children.get(c)
        } 

        root.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) { 
        let root = this.root 

        for (const c of word) {
            if (!root.children.get(c)) {
                return false
            } 
            root = root.children.get(c)
        } 

        return root.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) { 
        let root = this.root 

        for (const c of prefix) {
            if (!root.children.get(c)) {
                return false
            } 
            root = root.children.get(c)
        } 

        return true
    }
}
