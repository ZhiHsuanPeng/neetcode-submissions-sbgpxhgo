class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]: 
        nums.sort()
        res = [] 

        def dfs(start, part): 
            res.append(part.copy()) 

            for i in range(start, len(nums)): 
                if i > start and nums[i] == nums[i - 1]: 
                    continue 

                part.append(nums[i]) 
                dfs(i + 1, part) 
                part.pop() 

        dfs(0, []) 
        return res