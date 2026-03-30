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
        let maxF = 0;
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            count[cur] = ( count[cur] || 0 ) + 1;
            maxF = Math.max(count[cur], maxF)
            let curLen = r - l + 1;
            while(curLen - maxF > k) {
                let deleted = s[l];
                count[deleted] --;
                l ++;
                curLen = r - l + 1;
            }

            curLen = r - l + 1;
            res = Math.max(curLen, res)
        }

        return res
    }
}
