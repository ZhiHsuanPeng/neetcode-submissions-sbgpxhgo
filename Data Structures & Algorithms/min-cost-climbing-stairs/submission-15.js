class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {  
        const dp = new Array(cost.length + 1).fill(0);
        dp[0] = cost[0];
        dp[1] = cost[1];
        
        for (let i = 2; i < cost.length; i++) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }
        
        // The final step (top of the staircase) can be reached from either
        // the last step or second-to-last step without additional cost
        dp[cost.length] = Math.min(dp[cost.length - 1], dp[cost.length - 2]);
        
        return dp[dp.length - 1];
    }  


}
