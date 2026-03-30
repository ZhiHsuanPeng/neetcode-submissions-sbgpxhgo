class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = {}) { 
        if (n in memo) return memo[n] 
        if (n === 0) return 1 
        if (n < 0) return 0
       
        memo[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2) 

        return memo[n]
    } 
}
