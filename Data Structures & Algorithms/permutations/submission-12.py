class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        added = set()  
        res = [] 

        def dfs(cur): 
            if len(cur) == len(nums): 
                res.append(cur.copy()) 
                return 

            for i in range(len(nums)): 
                curNum = nums[i] 
                if curNum in added: 
                    continue 

                cur.append(curNum)  
                added.add(curNum)
                dfs(cur) 
                cur.pop()  
                added.remove(curNum)

        dfs([]) 
        return res