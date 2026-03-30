class Solution {
    /**
     * @param {string} s
     * @return {number}
     */ 
    constructor() {
        this.validString = new Set(new Array(26).fill(null).map((_, i) => (i + 1).toString()))
    } 

    numDecodings(s) { 
        return this.rec(s)
    } 

    rec(s) {
        if (s === '') return 1
        if (s.startsWith('0')) return 0 

        let res = 0 

        res += this.rec(s.slice(1))

        if (s.length >= 2 && this.validString.has(s.slice(0, 2))) {
            res += this.rec(s.slice(2))
        } 

        return res
    }
}
