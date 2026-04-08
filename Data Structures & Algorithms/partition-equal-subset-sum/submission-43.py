class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        n = sum(nums) 

        if n % 2 != 0: 
            return False 

        n = n // 2 

        dp = [False] * ( n + 1 ) 
        dp[0] = True 

        for num in nums: 
            for i in range(len(dp) - 1, -1, -1): 
                if i - num >= 0 and dp[i - num]: 
                    dp[i] = True 

        return dp[-1]