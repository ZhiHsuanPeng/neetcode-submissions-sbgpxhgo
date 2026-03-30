class Solution:
    def rob(self, nums: List[int]) -> int:  
        return max(nums[0], self.helper(nums[1: ]), self.helper(nums[:-1]))
        

    def helper(self, nums): 
        r1 = 0 
        r2 = 0 
        for num in nums: 
            cur = max(num + r1, r2) 
            r1 = r2 
            r2 = cur 
        return r2
        