class Solution:
    def climbStairs(self, n: int) -> int: 
        if n <= 1: 
            return 1 

        prev1 = 1 
        prev2 = 1 

        for _ in range(2, n + 1): 
            cur = prev1 + prev2 
            prev1 = prev2 
            prev2 = cur 

        return prev2