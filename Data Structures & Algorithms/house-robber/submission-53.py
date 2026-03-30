class Solution:
    def rob(self, nums: List[int]) -> int:
        
        def dfs(i, memo):  
            if i in memo: 
                return memo[i]
            if i >= len(nums): 
                return 0 
            
            memo[i] = max(nums[i] + dfs(i + 2, memo), dfs(i + 1, memo))
            return memo[i] 

        return dfs(0, {})