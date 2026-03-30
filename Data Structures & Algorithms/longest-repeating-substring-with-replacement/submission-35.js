class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) { 
        let c = {}  

        let l = 0  
        let max = 0
        for (let r = 0; r < s.length; r ++) {
            const cur = s[r]  

            if (c[cur] === undefined) {
                c[cur] = 1
            } else { 
                c[cur] ++
            } 

            while(((r - l + 1) - Math.max(...Object.values(c))) > k ) {
                let deleted = s[l] 
                c[deleted] --  
                l ++
            }

           max = Math.max(max, (r - l + 1))
        } 

        return max
    }
}
