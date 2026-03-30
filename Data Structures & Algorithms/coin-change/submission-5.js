class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) { 
        let dp = new Array(amount + 1).fill(Infinity) 
        
        dp[0] = 0

        for (let i = 0; i < dp.length; i ++) { 
            if (dp[i] !== Infinity) {
                for (const c of coins) {
                    if (i + c <= amount) {
                dp[i + c] = Math.min(dp[i + c], dp[i] + 1);
            }
                }
            } 
        } 

        return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
    }
}
