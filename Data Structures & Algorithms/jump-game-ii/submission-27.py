class Solution:
    def jump(self, nums: List[int]) -> int:
        cur = 0
        curMax =  0 
        jump = 0 
        

        for i in range(len(nums)): 
            if i > cur:
                cur = curMax 
                jump += 1 

            curMax = max(curMax, i + nums[i]) 

        return jump