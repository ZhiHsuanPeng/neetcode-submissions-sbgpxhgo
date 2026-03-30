class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        
        added = set() 
        res = [] 

        def dfs(start, cur): 
            if len(cur) == len(nums): 
                res.append(cur.copy()) 
                return 

            for i in range(len(nums)): 
                curNum = nums[i] 
                if curNum in added: 
                    continue 
                added.add(curNum) 
                cur.append(curNum) 
                dfs(i + 1, cur) 
                added.discard(curNum) 
                cur.pop() 

        dfs(0, []) 
        return res