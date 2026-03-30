class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        let next = node.next;
        let prev = node.prev;
        prev.next = next;
        next.prev = prev;
    }

    requeue(node) {
        let prev = this.tail.prev;
        prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
        node.prev = prev
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.remove(node);
            this.requeue(node);
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
            let node = this.map.get(key);
            node.val = value;
            this.remove(node);
            this.requeue(node);
            this.map.set(key, node);
        } else {
            let newNode = new Node(key, value);
            this.map.set(key, newNode);
            this.requeue(newNode);

            if (this.map.size > this.cap) {
                // remove the head node
                let headNode = this.head.next;
                this.remove(headNode)
                 this.map.delete(headNode.key);
            }
        }
    }
}
