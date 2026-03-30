class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = [] 

        def dfs(start, val, cur):  
            if start == len(nums) or val > target: 
                return 

            if val == target: 
                res.append(cur.copy()) 
                return 

            for i in range(start, len(nums)): 
                cur.append(nums[i]) 
                dfs(i, val + nums[i], cur) 
                cur.pop() 


        dfs(0, 0, []) 
        return res