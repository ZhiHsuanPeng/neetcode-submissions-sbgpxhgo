class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [] 

        def dfs(start, part): 
            res.append(part.copy()) 

            for i in range(start, len(nums)): 
                part.append(nums[i]) 
                dfs(i + 1, part) 
                part.pop() 

        dfs(0, []) 
        return res