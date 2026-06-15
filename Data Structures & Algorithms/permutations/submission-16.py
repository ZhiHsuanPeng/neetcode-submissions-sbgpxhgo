class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        added = set()
        res = []

        def dfs(cur): 
            if len(nums) == len(cur): 
                res.append(cur.copy()) 
                return 

            for i in range(len(nums)): 
                if nums[i] in added: 
                    continue 

                cur.append(nums[i]) 
                added.add(nums[i]) 
                dfs(cur) 
                cur.pop() 
                added.remove(nums[i]) 

        dfs([]) 
        return res