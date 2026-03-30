class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {} 
        let l = 0 
        let maxLen = 0
        let maxSubstring = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 
            count[cur] = ( count[cur] || 0 ) + 1
            maxSubstring = Math.max(maxSubstring, count[cur])
            let curLen = r - l + 1 
            while(curLen - maxSubstring > k) {
                let deleted = s[l] 
                count[deleted] -- 
                l ++ 
                curLen = r - l + 1
            }

            maxLen = Math.max(maxLen, curLen)
        }

        return maxLen
    }
}
