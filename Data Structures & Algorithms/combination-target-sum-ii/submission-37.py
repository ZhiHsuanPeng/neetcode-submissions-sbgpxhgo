class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort() 

        res = [] 
        def dfs(start, remain, part): 
            if remain < 0: 
                return 

            if remain == 0: 
                res.append(part.copy()) 
                return 

            for i in range(start, len(candidates)): 
                if i > start and candidates[i] == candidates[i - 1]: 
                    continue 

                part.append(candidates[i]) 
                dfs(i + 1, remain - candidates[i], part) 
                part.pop() 

        
        dfs(0, target, []) 
        return res