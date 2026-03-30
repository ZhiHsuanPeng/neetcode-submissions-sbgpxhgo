class Solution:
    def jump(self, nums: List[int]) -> int:
        maxEnd = 0   
        curEnd = 0
        jump = 0 

        for i in range(len(nums) - 1): 
            maxEnd = max(maxEnd, nums[i] + i) 

            if i >= curEnd: 
                jump += 1 
                curEnd = maxEnd 

        return jump