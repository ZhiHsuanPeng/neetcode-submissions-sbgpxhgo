class Node {
    constructor(key, val, next, prev) {
        this.key = key
        this.val = val 
        this.next = next 
        this.prev = prev
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) { 
        this.head = new Node() 
        this.tail = new Node() 
        this.head.next = this.tail 
        this.tail.prev = this.head 
        this.cache = new Map() 
        this.cap = capacity
    } 

    insert(node) {
        let firstNode = this.head.next 
        this.head.next = node 
        node.prev = this.head   
        node.next = firstNode 
        firstNode.prev = node
    } 

    remove(node) {
        let prev = node.prev 
        let next = node.next 
        prev.next = next 
        next.prev = prev 
        node.next = null 
        node.prev = null
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) { 
        if (this.cache.get(key)) {
            const node = this.cache.get(key) 
            this.remove(node) 
            this.insert(node) 
            return node.val
        } 

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) { 
        if (this.cache.get(key)) {
            const node = this.cache.get(key) 
            this.remove(node)
        } 

        const newNode = new Node(key, value)
        this.cache.set(key, newNode) 
        this.insert(newNode) 

        if (this.cache.size > this.cap) {
            const lruNode = this.tail.prev 
            this.cache.delete(lruNode.key) 
            this.remove(lruNode)
        }
    }
}
