class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let count = {};
    for (const c of t) {
        count[c] = (count[c] || 0) + 1;
    }

    let l = 0;
    let matches = 0;
    let minLen = s.length + 1;
    let subStrStart = 0;
    let requiredMatches = Object.keys(count).length;  // Number of unique characters in t

    for (let r = 0; r < s.length; r++) {
        if (count[s[r]] !== undefined) {
            count[s[r]]--;
            if (count[s[r]] === 0) {
                matches++;
            }
        }

        // When all characters are fully matched
        while (matches === requiredMatches) {
            // Update the smallest window
            if (minLen > r - l + 1) {
                minLen = r - l + 1;
                subStrStart = l;
            }

            // Shrink the window from the left
            let deleted = s[l];
            l++;
            if (count[deleted] !== undefined) {
                if (count[deleted] === 0) {
                    matches--;
                }
                count[deleted]++;
            }
        }
    }

    // If no valid window was found
    if (minLen > s.length) {
        return '';
    }
    
    return s.substring(subStrStart, subStrStart + minLen);
    }
}
