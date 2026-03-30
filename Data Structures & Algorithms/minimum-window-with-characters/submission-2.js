class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ''
        let need = {};
        for (const c of t) {
            need[c] = (need[c] || 0) + 1
        }
        let needLen = Object.keys(need).length
        let matched = 0;
        let minLen = Infinity;
        let l = 0;
        let start = 0;
        for (let r = 0; r < s.length; r ++) {
            if (need[s[r]] !== undefined) {
                need[s[r]] --;
                if (need[s[r]] === 0) {
                    matched ++
                }
            }

            while (matched === needLen) {
                // store the current length
                minLen = Math.min(minLen, r - l + 1)
                start = l
                // start shrink window
                let deleted = s[l]
                l ++
                if (need[deleted] !== undefined) {
                    need[deleted] ++
                    if (need[deleted] > 0) {
                        matched --
                    }
                }
            }
        }

        return minLen > s.length ? '' : s.substring(start, start + minLen)
    }
}
