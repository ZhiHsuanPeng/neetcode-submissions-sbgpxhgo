class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let count = {}  
        let need = 0
        for (const c of t) {
            count[c] = ( count[c] || 0 ) + 1
        } 
        need = Object.values(count).length  


        let l = 0  
        let minStart = l  
        let minLength = s.length + 1 

        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 

            if (count[cur] !== undefined) {
                count[cur] -- 
                if (count[cur] === 0) {
                    need --
                }
            } 

            while(need === 0) {
                if ((r - l + 1) < minLength) {
                    minStart = l 
                    minLength = (r - l + 1)
                } 

                let deleted = s[l] 
                if (count[deleted] !== undefined) {
                    count[deleted] ++ 
                    if (count[deleted] > 0) {
                        need ++
                    }
                } 
                l ++
            }
        } 

        return minLength === s.length + 1 ? "" : s.substring(minStart, minStart + minLength)
    }
}
