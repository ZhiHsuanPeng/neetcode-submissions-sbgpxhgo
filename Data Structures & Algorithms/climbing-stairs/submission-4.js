class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) { 

        return this.dfs(0, n)
    } 

    dfs(i, n) {
        if (i === n) return 1 
        if (i > n) return 0 

        return this.dfs(i + 1, n) + this.dfs(i + 2, n)

    }
}
