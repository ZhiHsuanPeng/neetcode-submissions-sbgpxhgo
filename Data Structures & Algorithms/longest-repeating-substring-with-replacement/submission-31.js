class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {} 
        
        let l = 0 
        let result = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r]
            count[cur] = ( count[cur] || 0 ) + 1
            let curLen = r - l + 1
            while(curLen - Math.max(...Object.values(count)) > k) {
                let deleted = s[l]
                count[deleted] -- 
                l ++ 
                curLen = r - l + 1
            }

            result = Math.max(result, curLen)
        }

        return result
    }
}
