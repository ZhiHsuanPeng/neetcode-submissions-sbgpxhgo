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

        for (let r = 0; r < s.length; r ++) {
            let cur = s[r];
            count[cur] = (count[cur] || 0) + 1;
            let curLen = r - l + 1

            if ((curLen - Math.max(...Object.values(count))) > k) {
                // shrink window
                let deleted = s[l];
                count[deleted] --
                l ++
            }

            curLen = r - l + 1
            max = Math.max(curLen, max)
        }

        return max
    }
}
