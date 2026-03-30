class Solution:
    def rob(self, nums: List[int]) -> int:
        return self.rec(0, nums, {})
    
    def rec(self, i, nums, memo): 
        if (i in memo): 
             return memo[i] 
        if (i >= len(nums)): 
            return 0 

        memo[i] = max(nums[i] + self.rec(i + 2, nums, memo), self.rec(i + 1, nums, memo)) 
        return memo[i] 