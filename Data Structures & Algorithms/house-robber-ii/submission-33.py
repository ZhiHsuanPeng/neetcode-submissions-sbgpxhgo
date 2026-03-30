class Solution:
    def rob(self, nums: List[int]) -> int: 
        if len(nums) == 1: 
            return nums[0] 

        def dfs(i, flag, memo): 
            if (i, flag) in memo: 
                return memo[(i, flag)] 
            if i >= len(nums) or ( i == len(nums) - 1 and flag ): 
                return 0 

            memo[(i, flag)] = max(nums[i] + dfs(i + 2, flag, memo), dfs(i + 1, flag, memo)) 
            return memo[(i, flag)]  

        memo = {}
        return max(dfs(0, True, memo), dfs(1, False, memo))