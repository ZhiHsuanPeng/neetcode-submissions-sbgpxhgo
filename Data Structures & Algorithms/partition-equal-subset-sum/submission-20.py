class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        target = sum(nums) 

        if target % 2 != 0: 
            return False 

        target = target // 2

        def dfs(i, cur): 
            if cur == target: 
                return True 

            if i >= len(nums) or cur > target: 
                return False 
            
            include = dfs(i + 1, cur + nums[i]) 
            exclude = dfs(i + 1, cur) 

            return include or exclude 

        return dfs(0, 0)