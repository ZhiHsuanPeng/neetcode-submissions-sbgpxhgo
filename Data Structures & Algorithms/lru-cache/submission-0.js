class Node {
    constructor(key, val) {
        this.key = key
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map();
        this.left = new Node();
        this.right = new Node();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev
    }

    insert(node) {
        // insert at the most right position of the list
        let prev = this.right.prev
        this.right.prev = node
        prev.next = node    
        node.next = this.right
        node.prev = prev
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.remove(node);
            this.insert(node);
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
        if (this.map.has(key)) {
            let node = this.map.get(key)
            node.val = value
            this.remove(node);
            this.insert(node)
        } else {
            const node = new Node(key, value)
            this.map.set(key, node)
            this.insert(node)

            if (this.map.size > this.cap) {
                const lru = this.left.next;
                this.remove(lru)
                this.map.delete(lru.key)
            }
        }
    }
}
