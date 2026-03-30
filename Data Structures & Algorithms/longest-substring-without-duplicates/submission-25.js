class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) { 

        let char = new Set()  
        let res = 0

        let l = 0 
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 

            while(char.has(cur)) {
                let deleted = s[l] 
                char.delete(deleted) 
                l ++
            } 

            char.add(cur) 
            res = Math.max(res, r - l + 1)
        } 

        return res
    }
}
