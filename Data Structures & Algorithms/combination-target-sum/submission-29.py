class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        
        res = []
        def dfs(start, cur, part): 
            if cur == 0: 
                res.append(part.copy()) 
                return 

            if cur < 0: 
                return 

            for i in range(start, len(nums)): 
                cur -= nums[i] 
                part.append(nums[i]) 
                dfs(i, cur, part) 
                cur += nums[i] 
                part.pop() 

        dfs(0, target, []) 
        return res