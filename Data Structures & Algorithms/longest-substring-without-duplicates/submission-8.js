class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let charSet = new Set();
        let result = 0;
        for (let r = 0; r < s.length; r ++) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l ++
            }

            charSet.add(s[r]);
            let len = r - l + 1;
            result = Math.max(len, result)
        }

        return result
    }
}
