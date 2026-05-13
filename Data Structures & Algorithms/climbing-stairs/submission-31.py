class Solution:
    def climbStairs(self, n: int) -> int: 
        dp = [0] * ( n + 1 ) 
        prev1 = 1 
        prev2 = 1

        for i in range(2, len(dp)): 
            cur = prev1 + prev2 
            prev1 = prev2 
            prev2 = cur 

        return prev2 

            
