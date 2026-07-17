class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curMax = nums[0] 
        res = nums[0] 

        for i in range(1, len(nums)): 
            curMax = max(curMax + nums[i], nums[i]) 
            res = max(res, curMax) 

        return res