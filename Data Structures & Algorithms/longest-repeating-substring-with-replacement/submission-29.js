class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let l = 0;
        let res = 0;
        let maxCount = 0;
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            count[cur] = (count[cur] || 0) + 1;
            maxCount = Math.max(maxCount, count[cur])
            let curLen = r - l + 1;
            while (curLen - maxCount > k) {
               let deleted = s[l];
               count[deleted] --;
               l ++
               curLen = r - l + 1
            }

            res = Math.max(res, curLen)
        }

        return res
    }
}
