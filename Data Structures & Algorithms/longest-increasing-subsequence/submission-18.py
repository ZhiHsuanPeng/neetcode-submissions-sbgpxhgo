class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        memo = {}
        def dfs(prev, i): 
            if (prev, i) in memo: 
                return memo[(prev, i)] 
            if i == len(nums): 
                return 0 

            res = dfs(prev, i + 1) 

            if prev == -1 or nums[prev] < nums[i]: 
                res = max(res, 1 + dfs(i, i + 1)) 
            memo[(prev, i)] = res
            return res 

        return dfs(-1, 0)