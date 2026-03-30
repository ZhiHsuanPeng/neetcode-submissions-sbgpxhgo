class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) { 
        return this.dfs(0, n, {})
    } 

    dfs(cur, n, memo) {
         if (cur === n) return 1 
         if (cur > n) return 0 

         if (memo[cur] !== undefined) return memo[cur]

        memo[cur] = this.dfs(cur + 1, n, memo) + this.dfs(cur + 2, n, memo) 

        return memo[cur]
    }
}
