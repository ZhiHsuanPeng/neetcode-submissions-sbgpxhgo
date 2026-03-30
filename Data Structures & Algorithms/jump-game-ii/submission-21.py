class Solution:
    def jump(self, nums: List[int]) -> int:
        curMax = 0  
        cur = 0
        cnt = 0 

        for i in range(len(nums)):  
            if i > cur: 
                cur = curMax 
                cnt += 1
                
            curMax = max(curMax, nums[i] + i) 

             

        return cnt