class Solution:
    def climbStairs(self, n: int) -> int:
        def rec(n, memo): 
            if n in memo: 
                return memo[n] 
            if n == 1: 
                return 1 
            if n == 2: 
                return 2 

            memo[n] = rec(n - 1, memo) + rec(n - 2, memo) 
            return memo[n] 

        return rec(n, {}) 
