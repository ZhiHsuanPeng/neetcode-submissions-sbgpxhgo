class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) { 

        let l = 0 
        let numSet = new Set() 
        let max = 0 

        for (let r = 0; r < s.length; r ++) {
            const cur = s[r] 
            while(numSet.has(cur)) {
                let deleted = s[l] 
                numSet.delete(deleted) 
                l ++
            }                                                                                                                                                                                                          
            numSet.add(cur) 
            max = Math.max(max, (r - l + 1))
        }

        return max
    }
}
