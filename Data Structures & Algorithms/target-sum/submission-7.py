class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        def dfs(i, cur): 
            if i == len(nums): 
                return 1 if cur == target else 0

            return dfs(i + 1, cur - nums[i]) + dfs(i + 1, cur + nums[i]) 

        return dfs(0, 0)