class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        def dfs(prev, i): 
            if i == len(nums): 
                return 0 

            res = dfs(prev, i + 1) 

            if prev == -1 or nums[prev] < nums[i]: 
                res = max(res, 1 + dfs(i, i + 1)) 

            return res 

        return dfs(-1, 0)