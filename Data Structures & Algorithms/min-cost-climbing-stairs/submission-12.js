class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {  
        const memo = {}  
        return Math.min(this.dfs(0, cost, memo), this.dfs(1, cost, memo))
    }  

    dfs(pos, cost, memo) { 
        if (pos in memo) return memo[pos]   
        if (pos >= cost.length) return 0 
        const cur = cost[pos]
        memo[pos] = cur + Math.min(this.dfs(pos + 1, cost, memo), this.dfs(pos + 2, cost, memo))
        return memo[pos]
    }
}
