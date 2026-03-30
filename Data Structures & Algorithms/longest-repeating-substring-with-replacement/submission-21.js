class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let count = {};
        let max = 0
        let maxFreq = 0;

        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            count[cur] = (count[cur] || 0) + 1;
            maxFreq = Math.max(count[cur], maxFreq);

            let curLen = r - l + 1
            while ((curLen - maxFreq) > k) {
                // shrink window
                let deleted = s[l];
                count[deleted] --
                l ++
                curLen = r - l + 1
            }

            max = Math.max(curLen, max)
        }

        return max
    }
}
