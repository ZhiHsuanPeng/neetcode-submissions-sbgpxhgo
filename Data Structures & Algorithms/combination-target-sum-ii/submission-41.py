class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        c = candidates 
        c.sort() 

        res = [] 
        
        def dfs(start, val, cur): 
            if val == target: 
                res.append(cur.copy()) 
                return 

            if val > target: 
                return 

            for i in range(start, len(c)): 
                if i > start and c[i] == c[i - 1]: 
                    continue 

                cur.append(c[i]) 
                dfs(i + 1, val + c[i], cur) 
                cur.pop() 

        dfs(0, 0, []) 
        return res