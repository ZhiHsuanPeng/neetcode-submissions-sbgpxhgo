class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) { 
        let count = {} 

        for (const s of t) {
            count[s] = ( count[s] || 0 ) + 1
        } 

        let need = Object.values(count).length 


        let start = 0 
        let minLen = s.length + 1
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
                // consider valid string 
                if ((r - l + 1) < minLen) {
                    minLen = (r - l + 1) 
                    start = l
                } 

                // start to shrink the window 
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

        return minLen === s.length + 1 ? "" : s.substring(start, start + minLen)
    }
}
