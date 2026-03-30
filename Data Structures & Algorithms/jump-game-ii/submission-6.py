class Solution:
    def jump(self, nums: List[int]) -> int:
        
        def dfs(i): 
            if i >= len(nums) - 1: 
                return 0 
            
            res = float('inf')
            for j in range(1, nums[i] + 1):  
                res = min(res, 1 + dfs(i + j)) 

            return res 

        return dfs(0)