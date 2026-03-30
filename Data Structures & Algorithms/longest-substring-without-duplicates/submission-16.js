class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let c = new Set();

        let l = 0 
        let maxLen = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            while(c.has(cur)) {
                let deleted = s[l]
                c.delete(deleted)
                l ++
            }
            c.add(cur)
            maxLen = Math.max(maxLen, (r - l + 1))
        }   

        return maxLen
    }
}
