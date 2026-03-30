class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        target = sum(nums) 

        if target % 2 != 0: 
            return False 

        target = target // 2 

        dp = [False] * ( target + 1 ) 

        dp[0] = True 

        for num in nums: 
            for i in range(target, -1, -1): 
                if i - num >= 0 and dp[i - num]: 
                    dp[i] = True 

        return dp[target]