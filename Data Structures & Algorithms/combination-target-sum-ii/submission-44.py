class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        res = []  


        def dfs(start, val, cur): 
            if val > target: 
                return 

            if val == target: 
                res.append(cur.copy()) 
                return 

            for i in range(start, len(candidates)): 
                if i > start and candidates[i] == candidates[i - 1]: 
                    continue 

                cur.append(candidates[i]) 
                dfs(i + 1, val + candidates[i], cur) 
                cur.pop() 

        dfs(0, 0, []) 
        return res