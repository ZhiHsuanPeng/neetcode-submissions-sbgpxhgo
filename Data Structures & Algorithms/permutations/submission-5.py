class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = [] 

        def dfs(part, track): 
            if len(part) == len(nums): 
                res.append(part.copy()) 
                return 

            for key in track: 
                if track[key]: 
                    continue 

                part.append(key) 
                track[key] = True 
                dfs(part, track) 
                part.pop() 
                track[key] = False  

        

        dfs([], {i:False for i in nums}) 
        return res
