class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            while(set.has(cur)) {
                set.delete(s[l]);
                l ++;
            }

            set.add(cur);
            let curLen = r - l + 1;
            res = Math.max(res, curLen)
        }

        return res;
    }
}
