class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) { 
        return Math.min(this.dfs(0, cost), this.dfs(1, cost))
    } 

    dfs(n, cost, memo = {}) {
        if (n >= cost.length) return 0 
        if (n in memo) return memo[n]
        memo[n] = cost[n] + Math.min(this.dfs(n + 1, cost, memo), this.dfs(n + 2, cost, memo))
        return memo[n]
    }
}
