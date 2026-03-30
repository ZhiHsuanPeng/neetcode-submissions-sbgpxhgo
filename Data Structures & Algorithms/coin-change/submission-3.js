class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) { 
        const res = this.dfs(coins, amount, {}) 
        return res === Infinity ? -1 : res
    } 

    dfs(coins, amount, memo) { 
        if (amount in memo) return memo[amount]
        if (amount === 0) return 0 
        if (amount === -1) return Infinity 

        let res = Infinity 
        for (const c of coins) { 
            if (c <= amount) {
                let count = this.dfs(coins, amount - c, memo) 
                res = Math.min(res, count + 1)
            }  
        } 

        memo[amount] = res
        return res
    }
}
