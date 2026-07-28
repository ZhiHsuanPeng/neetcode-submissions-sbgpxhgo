class Solution:
    def jump(self, nums: List[int]) -> int:
        cur = 0 
        curMax = 0 
        cnt = 0 

        for i in range(len(nums)):  
            if i > cur: 
                cnt += 1 
                cur = curMax 
                
            curMax = max(curMax, i + nums[i]) 

            

        return cnt