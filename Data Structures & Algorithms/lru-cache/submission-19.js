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
        this.limit = capacity 
        this.head = new Node() 
        this.tail = new Node() 
        this.head.next = this.tail 
        this.tail.prev = this.head
    } 

    insert(node) {
        let next = this.head.next 
        this.head.next = node 
        node.prev = this.head 
        node.next = next 
        next.prev = node
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
    // refresh order of the the lists
    get(key) { 
        let node = this.cache.get(key)
        if (!node) return -1 

        this.remove(node) 
        this.insert(node) 
        return node.val
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

        if (this.limit < this.cache.size) {
            const lru = this.tail.prev 
            const key = lru.key 
            this.cache.delete(key) 
            this.remove(lru)
        }
    }
}
