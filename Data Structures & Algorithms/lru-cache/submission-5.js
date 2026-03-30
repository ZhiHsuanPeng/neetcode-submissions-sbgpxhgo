class Node {
    constructor(key, val, prev, next) {
        this.key = key 
        this.val = val 
        this.prev = prev 
        this.next = next
    }
} 
 
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) { 
        this.cache = new Map() 
        this.cap = capacity 
        this.head = new Node() 
        this.tail = new Node() 
        this.head.next = this.tail 
        this.tail.prev=  this.head
    }  

    // to remove a node from LRU cache 
    remove(node) {
        const prev = node.prev 
        const next = node.next 

        prev.next = next 
        next.prev = prev 
        node.next = null 
        node.prev = null    
    } 

    // refresh the cache by inserting a node beside head node
    insert(node) {
        const firstNode = this.head.next 

        this.head.next = node 
        node.next = firstNode 
        firstNode.prev = node 
        node.prev = this.head
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

        const newNode = new Node(key , value) 
        this.insert(newNode) 
        this.cache.set(key, newNode) 

        if (this.cache.size > this.cap) {
            const lru = this.tail.prev 
            this.remove(lru) 
            this.cache.delete(lru.key)
        }

    }
}
