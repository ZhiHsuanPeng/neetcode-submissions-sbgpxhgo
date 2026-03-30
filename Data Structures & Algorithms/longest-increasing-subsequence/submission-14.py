class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        
        def dfs(prev, cur):
            if cur == len(nums): 
                return 0 

            res = dfs(prev, cur + 1) 

            if prev == -1 or nums[prev] < nums[cur]: 
                res = max(res, 1 + dfs(cur, cur + 1)) 

            return res 

        return dfs(-1, 0) 
        