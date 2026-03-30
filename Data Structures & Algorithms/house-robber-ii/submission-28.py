class Solution:
    def rob(self, nums: List[int]) -> int: 
        if len(nums) == 1: 
            return nums[0]

        return max(self.rec(0, nums, True, {}), self.rec(1, nums, False, {})) 

    def rec(self, i, nums, flag, memo): 
        if i in memo: 
            return memo[i]
             
        if (i >= len(nums) or (flag and i == len(nums) - 1)): 
            return 0 
        
        memo[i] = max(self.rec(i + 2, nums, flag, memo) + nums[i], 
                    self.rec(i + 1, nums, flag, memo)) 

        return memo[i]