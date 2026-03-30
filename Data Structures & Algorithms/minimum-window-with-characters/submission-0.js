class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let count = {};

        // count the need
        for (const c of t) {
            count[c] = ( count[c] || 0 ) + 1 
        }

        let l = 0;
        let matches = 0;
        let subStr = 0;
        let minLen = s.length + 1
        // start to use the window
        for (let r = 0; r < s.length; r ++) {

            // if the current iterated char is in need, then subtract it
            if (count[s[r]] !== undefined) {
                count[s[r]] --  
                // if the count = 0, the we satisfy one match
                if (count[s[r]] === 0) {
                    matches ++
                }
            }

            // if we meet all of the need, then we start to shrink the window
            while(matches === Object.values(count).length) {
                // first we calculate the length
                let len = r - l + 1;
                if (minLen > len) {
                    minLen = len;
                    // store the current left window
                    subStr = l;
                }

                // start shrinking the window
                let deleted = s[l];
                l ++
                if (count[deleted] !== undefined) {
                // If removing this char makes it insufficient, reduce matches
                if (count[deleted] === 0) {
                    matches--;
                }
                count[deleted]++;
            }   
            }
        }
          return minLen > s.length ? "" : s.substring(subStr, subStr + minLen)
    }
}
