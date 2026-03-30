class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(start, cur):  
            nonlocal res 
            
            res.append(cur.copy()) 

            for i in range(start, len(nums)): 
                cur.append(nums[i]) 
                dfs(i + 1, cur) 
                cur.pop() 

        dfs(0, []) 
        return res