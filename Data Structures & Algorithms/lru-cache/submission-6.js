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
        this.cap = capacity 
        this.cache = new Map() 
        this.head = new Node() 
        this.tail = new Node() 
        this.head.next = this.tail 
        this.tail.prev = this.head
    }

    remove(node) {
        let prev = node.prev 
        let next = node.next 

        prev.next = next 
        next.prev = prev 
        node.next = null 
        node.prev = null
    } 

    insert(node) {
        let firstNode = this.head.next 

        this.head.next = node 
        node.prev = this.head 
        node.next = firstNode 
        firstNode.prev = node
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
            this.remove(this.cache.get(key))
        } 

        const newNode = new Node(key, value) 
        this.cache.set(key, newNode) 
        this.insert(newNode) 

        if (this.cache.size > this.cap) {
            const lru = this.tail.prev 
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
