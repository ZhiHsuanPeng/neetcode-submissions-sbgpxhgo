class Solution:
    def jump(self, nums: List[int]) -> int:
        
        jump = 0 
        cur = 0 
        curMax = 0 

        for i in range(len(nums)): 
            if i > cur: 
                jump += 1 
                cur = curMax 

            curMax = max(curMax, i + nums[i]) 

        return jump
            