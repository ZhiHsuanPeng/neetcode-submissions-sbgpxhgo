class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let count = {};
        let longest = 0;
        for (let r = 0; r < s.length; r ++) {
            // every iteration will increase one count
            count[s[r]] = (count[s[r]] || 0) + 1;
            let distance = r - l + 1;
            if ( distance - Math.max(...Object.values(count)) > k) {
                count[s[l]] = (count[s[l]] - 1)
                l ++
            }
            // calculate distance between two pointers
            distance = r - l + 1;
            longest = Math.max(longest, distance)
        }

        return longest
    }
}
