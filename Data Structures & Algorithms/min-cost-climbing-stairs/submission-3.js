class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) { 

        return Math.min(this.dfs(0, cost), this.dfs(1, cost))
    } 

    dfs(n, cost) {
        if (n >= cost.length) return 0

        return cost[n] + Math.min(this.dfs(n + 1, cost), this.dfs(n + 2, cost))
    }
}
