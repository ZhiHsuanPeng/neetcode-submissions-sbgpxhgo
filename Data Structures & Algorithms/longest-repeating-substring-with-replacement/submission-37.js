class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) { 
        let count = {} 
        let max = 0
        let l = 0 
        for (let r = 0; r < s.length; r ++) {
            // add number in count  
            let char = s[r]
            count[char] = ( count[char] || 0 ) + 1 

            // check if the condition is met
            while(((r - l + 1) - Math.max(...Object.values(count))) > k) {
                let deleted = s[l] 
                count[deleted] -- 
                l ++
            } 

            max = Math.max(max, (r - l + 1))
        } 

        return max
    }
}
