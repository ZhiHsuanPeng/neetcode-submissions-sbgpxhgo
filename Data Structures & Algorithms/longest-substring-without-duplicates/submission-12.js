class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let l = 0;
        let max = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r]
            while(charSet.has(cur)) {
                let deleted = s[l];
                charSet.delete(deleted)
                l ++
            }
            // add to set if not exist 
            charSet.add(cur)
            max = Math.max((r - l + 1), max)
        }

        return max
    }
}
