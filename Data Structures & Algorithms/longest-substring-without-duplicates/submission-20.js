class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set() 
        let l = 0 
        let max = 0
        for (let r = 0; r < s.length; r ++) {
            const cur = s[r]
            while(set.has(cur)) {
                const deleted = s[l]
                set.delete(deleted)
                l ++
            }

            set.add(cur)
            max = Math.max(max, (r - l + 1))
        }
        return max

    }
}
