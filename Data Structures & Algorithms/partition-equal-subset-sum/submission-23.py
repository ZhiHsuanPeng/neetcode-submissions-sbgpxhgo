class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        numSum = sum(nums) 
        
        if numSum % 2 != 0: 
            return False 

        target = numSum // 2 

        def dfs(i, cur):    
            if i == len(nums): 
                return False 
                 
            if cur > target: 
                return False 

            if cur == target: 
                return True 

            take = dfs(i + 1, cur + nums[i]) 
            notTake = dfs(i + 1, cur) 

            return take or notTake 

        return dfs(0, 0)