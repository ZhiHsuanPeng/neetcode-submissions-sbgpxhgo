class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let c = new Set();
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            while (c.has(cur)) {
                let deleted = s[l]
                c.delete(deleted)
                l ++
            }

            c.add(cur)
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
