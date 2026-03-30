class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        target = sum(nums)      
        if target % 2: 
            return False 
        target = target // 2   

        def dfs(i, cur): 
            if cur == target: 
                return True 

            if i == len(nums) or cur > target: 
                return False 

            return dfs(i + 1, cur) or dfs(i + 1, cur + nums[i])  

        return dfs(0, 0)
              

        