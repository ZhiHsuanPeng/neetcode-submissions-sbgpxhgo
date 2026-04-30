class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []  

        candidates.sort()

        def dfs(start, total, cur): 
            if total > target: 
                return 

            if total == target: 
                res.append(cur.copy()) 
                return 

            for i in range(start, len(candidates)): 
                if i > start and candidates[i] == candidates[i - 1]: 
                    continue 

                cur.append(candidates[i]) 
                nxt = total + candidates[i]
                dfs(i + 1, nxt, cur)  
                cur.pop() 

        dfs(0, 0, []) 
        return res
