class Node {
    constructor(key, val, next, prev) {
        this.key = key || 0
        this.val = val || 0
        this.next = next || null 
        this.prev = next || null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) { 
        this.map = new Map()
        this.cap = capacity 
        this.tail = new Node() 
        this.head = new Node() 
        this.tail.prev = this.head 
        this.head.next = this.tail
    } 

    remove(node) {
        let prev = node.prev  
        let next = node.next
        prev.next = next 
        next.prev = prev 

        node.prev = null 
        node.next = null
    } 

    insert(node) {
        let first = this.head.next 
        this.head.next = node 
        node.prev = this.head
        node.next = first 
        first.prev = node 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) { 

        if (this.map.get(key)) { 
            const node = this.map.get(key)
            this.remove(node) 
            this.insert(node)
            const res = node.val
            return res
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
            this.remove(this.map.get(key))
        } 

        const newNode = new Node(key, value) 
        this.insert(newNode) 
        this.map.set(key, newNode)
       
        if (this.map.size > this.cap) {
            this.map.delete(this.tail.prev.key)
            this.remove(this.tail.prev) 
        }
    }


}
