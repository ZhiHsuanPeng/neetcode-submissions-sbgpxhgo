class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        
        def dfs(i, cur): 
            if i == len(nums): 
                return 1 if cur == target else 0 

            take = dfs(i + 1, cur + nums[i]) 
            minus = dfs(i + 1, cur - nums[i]) 

            return take + minus  

        return dfs(0, 0)