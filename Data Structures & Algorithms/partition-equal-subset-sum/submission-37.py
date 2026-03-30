class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        numSum = sum(nums) 
        if numSum % 2 != 0: 
            return False

        target = numSum // 2 

        dp = [False] * ( target + 1 )  
        dp[0] = True

        for num in nums: 
            for i in range(target, -1, -1):  
                if i - num < 0: 
                    break 

                if dp[i - num]: 
                    dp[i] = True 

        return dp[-1]