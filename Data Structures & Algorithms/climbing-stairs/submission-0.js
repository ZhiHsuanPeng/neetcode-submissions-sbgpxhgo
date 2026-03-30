class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) { 
        return this.dfs(0, n)
    } 

    dfs(cur, n) {
         if (cur === n) return 1 
         if (cur > n) return 0

        return this.dfs(cur + 1, n) + this.dfs(cur + 2, n)
    }
}
