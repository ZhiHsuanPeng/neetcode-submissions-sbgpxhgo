class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       let need = {};
       for (const c of t) {
        need[c] = (need[c] || 0) + 1;
       }

       let l = 0;
       let matches = 0;
       let needLen = Object.keys(need).length
       let minLen = s.length + 1
       let start = 0
       for (let r = 0; r < s.length; r ++) {
        let cur = s[r];
        if (need[cur] !== undefined) {
            need[cur] --;
            if (need[cur] === 0) {
                matches ++
            }

            while(matches === needLen) {
                let curLength = r - l + 1
                if (curLength < minLen) {
                    minLen = curLength;
                    start = l
                }
                let deleted = s[l];
                if (need[deleted] !== undefined) {
                    if (need[deleted] === 0) {
                        matches --
                    }
                    need[deleted] ++; 
                }
                l ++
            }
            }
       }
       return minLen === s.length + 1 ? '' : s.substring(start, start + minLen)
    }
}
