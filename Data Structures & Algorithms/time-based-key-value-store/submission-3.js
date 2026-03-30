class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) { 
        if (!this.map.get(key)) {
            this.map.set(key, [])
        } 

        this.map.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { 
        if (!this.map.get(key)) {
            return ""
        } 

        const pair = this.map.get(key) 
        let l = 0 
        let r = pair.length - 1 
        let res = "" 

        while(l <= r) {
            let mid = Math.floor((r + l) / 2)  
            const [key, time] = pair[mid] 

            if (time <= timestamp) {
                res = key 
                l = mid + 1
            } else {
                r = mid - 1
            }             
        } 

        return res
    }
}
