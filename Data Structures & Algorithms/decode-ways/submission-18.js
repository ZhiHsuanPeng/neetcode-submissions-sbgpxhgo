class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) { 

        function rec(i, memo) { 
            if (i in memo) return memo[i]
            if (i === s.length) return 1 
            if (s[i] === '0') return 0 

            let res = 0 
            res = rec(i + 1, memo) 

            if (i + 1 < s.length && Number(s.slice(i, i + 2)) <= 26) {
                res += rec(i + 2, memo)
            }  

            memo[i] = res
            return res
        } 

        return rec(0, {})
    }
}
