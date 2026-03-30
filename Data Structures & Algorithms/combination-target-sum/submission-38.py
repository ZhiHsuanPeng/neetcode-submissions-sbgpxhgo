class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = [] 

        def dfs(start, cur, arr): 
            nonlocal res 

            if cur < 0: 
                return 

            if cur == 0: 
                res.append(arr.copy()) 
                return 

            for i in range(start, len(nums)): 
                arr.append(nums[i]) 
                cur -= nums[i]
                dfs(i, cur, arr) 
                arr.pop()   
                cur += nums[i]

        dfs(0, target, []) 
        return res            