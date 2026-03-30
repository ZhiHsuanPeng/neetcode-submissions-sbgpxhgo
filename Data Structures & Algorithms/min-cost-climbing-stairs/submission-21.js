class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) { 
        const n = cost.length  
       const dp = new Array(n + 1).fill(0) 

       dp[0] = cost[0] 
       dp[1] = cost[1] 

        for (let i = 2; i < dp.length; i ++) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
        } 
 
        dp[n] = Math.min(dp[n - 1], dp[n - 2])

        return dp[n]
    }  


}
