class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) { 
       return this.rec(s)
    } 

    rec(s) {
        if (s === '') return 1 
        if (s[0] === '0') return 0 
         
        let res = 0 
        res += this.rec(s.slice(1)) 

        if (s.length >= 2 && Number(s.slice(0, 2)) <= 26) {
            res += this.rec(s.slice(2))            
        } 

        return res
    }
}
