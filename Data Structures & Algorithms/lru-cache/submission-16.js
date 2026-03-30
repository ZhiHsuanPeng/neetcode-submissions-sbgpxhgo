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
            let node = this.cache.get(key) 
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
            let node = this.cache.get(key) 
            this.remove(node)
        }

        let newNode = new Node(key, value) 
        this.cache.set(key, newNode) 
        this.insert(newNode)


        if (this.cache.size > this.cap) { 
            let lru = this.tail.prev 

            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}
