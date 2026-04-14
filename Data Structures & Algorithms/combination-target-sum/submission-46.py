class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = [] 

        def dfs(start, total, cur): 
            if total == target: 
                res.append(cur.copy())
                return 

            if total > target:
                return 

            for i in range(start, len(nums)):  
                cur.append(nums[i])
                dfs(i, total + nums[i], cur) 
                cur.pop() 

        dfs(0, 0, []) 
        return res