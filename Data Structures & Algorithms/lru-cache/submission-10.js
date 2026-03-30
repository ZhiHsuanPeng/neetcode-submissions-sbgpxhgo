class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) { 
        this.cache = new Map() 
        this.cap = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) { 
        if (this.cache.get(key)) {
            const val = this.cache.get(key) 
            this.cache.delete(key) 
            this.cache.set(key, val)
            return val
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
            this.cache.delete(key) 
        } 

        this.cache.set(key, value) 

        if (this.cache.size > this.cap) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
    }
}
