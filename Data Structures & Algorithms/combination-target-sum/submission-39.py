class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = [] 

        def dfs(start, cur, arr): 
            if cur == target: 
                res.append(arr.copy()) 
                return  

            if cur > target: 
                return

            for i in range(start, len(nums)):  
                arr.append(nums[i]) 
                dfs(i, cur + nums[i], arr) 
                arr.pop() 

        dfs(0, 0, []) 
        return res 

