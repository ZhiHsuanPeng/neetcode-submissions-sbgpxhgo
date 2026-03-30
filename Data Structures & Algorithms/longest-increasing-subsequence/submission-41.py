class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        

        def dfs(last, i): 
            if i == len(nums): 
                return 0 
            
            res = dfs(last, i + 1) 

            if last == None or nums[i] > last: 
                res = max(res, 1 + dfs(nums[i], i + 1)) 

            return res 

        return dfs(None, 0)    