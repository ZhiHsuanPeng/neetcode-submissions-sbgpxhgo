class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        curSum = 0 
        res = len(nums) + 1 

        l = 0  
        for r in range(len(nums)): 
            cur = nums[r] 
            curSum += cur 

            while curSum >= target:
                curLen = r - l + 1 
                res = min(curLen, res) 

                deleted = nums[l] 
                curSum -= deleted 
                l += 1

        return res if res != len(nums) + 1 else 0
