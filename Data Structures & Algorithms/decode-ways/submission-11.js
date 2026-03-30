class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {   
        if (s[0] === '0') return 0
        const n = s.length + 1 
        let dp = new Array(n).fill(0) 

        dp[0] = 1 
        dp[1] = 1 

        for (let i = 2; i < dp.length; i ++) {
            if (s[i - 1] !== '0') {
                dp[i] += dp[i - 1]
            } 

            let twoD = Number(s.slice(i - 2, i)) 

            if (twoD >= 10 && twoD <= 26) {
                dp[i] += dp[i - 2]
            }
        }
         
        return dp[dp.length - 1]
    } 
}
