class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) { 
        const c = {} 

        let l = 0
        let maxCount = 0 
        let res = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 

            c[cur] = ( c[cur] || 0 ) + 1 
            maxCount = Math.max(maxCount, c[cur]) 

            while(( ( r - l + 1) - maxCount) > k ) {
                let deleted = s[l] 
                c[deleted] -- 
                l ++
            } 

            res = Math.max(res, ( r - l + 1 ))
        }

        return res
    }
}
