class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        res = float('inf') 
        curSum = 0 
        l = 0 

        for r in range(len(nums)): 
            cur = nums[r] 

            curSum += cur 

            while curSum >= target: 
                res = min(res, r - l + 1) 
                deleted = nums[l] 
                curSum -= deleted 
                l += 1 

        return res if res != float('inf') else 0