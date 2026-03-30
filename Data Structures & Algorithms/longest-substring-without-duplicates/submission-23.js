class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) { 
        let set = new Set()  
        let max = 0
        let l = 0 
        for (let r = 0; r < s.length; r ++) {
            let char = s[r] 
            while(set.has(char)) {
                let deleted = s[l] 
                set.delete(deleted) 
                l ++
            }  
            max = Math.max(max, (r - l + 1))
            set.add(char)
        } 

        return max
    }
}
