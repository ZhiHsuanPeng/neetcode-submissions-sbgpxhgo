class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        

        def dfs(prev, i): 
            if i == len(nums): 
                return 0 

            res = dfs(prev, i + 1) 

            if prev == float('-inf') or nums[i] > prev: 
                res = max(res, 1 + dfs(nums[i], i + 1)) 
            
            return res 

        return dfs(float('-inf'), 0)