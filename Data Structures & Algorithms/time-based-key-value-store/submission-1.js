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

        if (!(this.map.get(key))) {
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

        const arr = this.map.get(key)  
         
         if (!arr) return ""

        let l = 0 
        let r = arr.length - 1  
        let res = ""

        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2) 
            let pair = arr[mid] 

            if (pair[1] === timestamp) return pair[0] 

            if (pair[1] < timestamp) {
                res = pair[0] 
                l = mid + 1
            } else {
                r = mid - 1
            }
        } 

        return res
    }
}
