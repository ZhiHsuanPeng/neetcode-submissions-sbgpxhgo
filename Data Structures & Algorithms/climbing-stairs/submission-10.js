class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) { 
        const dp = new Array(n + 1).fill(0) 

        dp[0] = 1 
        for (let i = 0; i < dp.length; i ++) { 
                if (i + 1 < dp.length) {
                    dp[i + 1] = dp[i + 1] + dp[i] 
                } 

                if (i + 2 < dp.length) {
                    dp[i + 2] = dp[i + 2] + dp[i]
                }   
        } 

        return dp[n]
    } 
}
