class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) { 

        let count = {}  
        let need = 0 
        let minLength = s.length + 1
        let minStart = 0

        for (const c of t) {
            count[c] = ( count[c] || 0 ) + 1
        }  

        need = Object.values(count).length

        let l = 0 
        for (let r = 0; r < s.length; r ++) {
            let cur = s[r] 
            if (count[cur] !== undefined) {
                count[cur] -- 
                if (count[cur] === 0) {
                    need --
                }
            } 

            while(need === 0) { 
                if (r - l + 1 < minLength) {
                    minLength = r - l + 1;
                    minStart = l;
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

        return minLength === s.length + 1 ? '' : s.substring(minStart, minStart + minLength)
    }
}
