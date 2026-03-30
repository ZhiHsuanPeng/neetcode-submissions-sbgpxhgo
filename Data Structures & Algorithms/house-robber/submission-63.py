class Solution:
    def rob(self, nums: List[int]) -> int:  
        if len(nums) == 1: 
            return nums[0]
        r1 = 0 
        r2 = 0 

        for num in nums: 
            cur = max(num + r1, r2)  
            r1 = r2
            r2 = cur 

        return r2