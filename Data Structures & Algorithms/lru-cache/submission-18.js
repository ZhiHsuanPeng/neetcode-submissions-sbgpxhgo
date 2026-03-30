class Node {
    constructor(key = 0, val = 0, next = null, prev = null) { 
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
        this.map = new Map() 
        this.head = new Node() 
        this.tail = new Node() 
        this.head.next = this.tail 
        this.tail.prev = this.head
    } 

    insert(node) { 
        let temp = this.head.next 

        this.head.next = node 
        node.next = temp 
        temp.prev = node 
        node.prev = this.head
    } 

    remove(node) { 
        let prev = node.prev 
        let next = node.next 

        prev.next = next 
        next.prev = prev 

        node.prev = null 
        node.next = null
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) { 
        if (this.map.get(key)) {
            let node = this.map.get(key) 
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
        if (this.map.get(key)) {
            let node = this.map.get(key) 
            this.remove(node)
        } 

        let newNode = new Node(key, value)
        this.map.set(key, newNode) 
        this.insert(newNode) 

        if (this.map.size > this.cap) {
            let lru = this.tail.prev 
            let key = lru.key 

            this.map.delete(key) 
            this.remove(lru)
        }
    }
}
