class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let count = {};
        let maxFreq = 0
        let result = 0
        for (let r = 0; r < s.length; r ++) {
            count[s[r]] = (count[s[r]] || 0) + 1
            maxFreq = Math.max(count[s[r]], maxFreq)
            let len = r - l + 1
            if ((len - maxFreq) > k) {
                count[s[l]] = count[s[l]] - 1
                l ++
            }

            len = r - l + 1
            result = Math.max(result, len)
        }

        return result
    }
}
