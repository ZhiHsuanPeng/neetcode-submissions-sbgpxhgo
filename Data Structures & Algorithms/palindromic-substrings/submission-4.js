class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {  
        
        let res = 0 
        for (let i = 0; i < s.length; i ++) {
            let oddCount = this.expand(i, i, s) 
            let evenCount = this.expand(i, i + 1, s) 
            res = res + oddCount + evenCount
        } 

        return res
    } 

    expand(l, r, s) {
        let count = 0 
        while(s[l] === s[r] && l >= 0 && r < s.length) {
            l -- 
            r ++ 
            count ++
        } 

        return count
    }
}
