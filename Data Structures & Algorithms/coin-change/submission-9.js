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
                    const pos = i + c
                    if (pos < dp.length) { 
                        dp[pos] = Math.min(dp[pos], dp[i] + 1)
                    }
                }
            }
        } 

        return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
    }
}
