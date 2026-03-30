class Solution {
    /**
     * @param {string} s
     * @return {number}
     */ 

    numDecodings(s) { 
        return this.rec(s)
    } 

    rec(s, memo = {}) { 
        if (s in memo) return memo[s] 
        if (s === '') return 1
        if (s.startsWith('0')) return 0 

        let res = 0 

        // slice first digit
        res += this.rec(s.slice(1), memo)

        const twoD = Number(s.slice(0, 2)) 
        if (s.length >= 2 && twoD < 27) {
            res += this.rec(s.slice(2), memo)        
        }

        memo[s] = res 

        return res
    }
}
