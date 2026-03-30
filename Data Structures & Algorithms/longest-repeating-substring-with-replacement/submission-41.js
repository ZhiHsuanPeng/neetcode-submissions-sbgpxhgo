class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {  
        let count = {}
        let res = 0

        let l = 0 
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 

            count[cur] = ( count[cur] || 0 ) + 1 

            while(((r - l + 1) - Math.max(...Object.values(count))) > k) {
                let deleted = s[l] 
                count[deleted] -- 
                l ++
            } 

            
            res = Math.max(res, (r - l + 1))
        } 

        return res
    }
}
