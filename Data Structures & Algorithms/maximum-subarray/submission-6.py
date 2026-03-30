class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxEnding= nums[0]
        res = nums[0] 

        for i in range(1, len(nums)): 
            maxEnding = max(maxEnding + nums[i], nums[i]) 
            res = max(res, maxEnding) 

        return res