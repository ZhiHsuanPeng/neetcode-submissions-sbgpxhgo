class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let window = new Set()
        let l = 0
        let result = 0
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r]
            while(window.has(cur)) {
                let deleted = s[l]
                window.delete(deleted)
                l ++
            }
            window.add(cur)
            result = Math.max(result, (r - l + 1))
        }

        return result
    }
}
