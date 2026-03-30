class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {   
        return Math.min(this.dfs(0, cost), this.dfs(1, cost))
    }  

    dfs(pos, cost) {   
        if (pos >= cost.length) return 0 
        const cur = cost[pos]
        return cur + Math.min(this.dfs(pos + 1, cost), this.dfs(pos + 2, cost))
    }
}
