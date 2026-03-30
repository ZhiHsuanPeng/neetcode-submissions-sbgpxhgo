class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        c = sorted(candidates)
        res = [] 

        def dfs(start, cur, arr):   
            if cur > target: 
                return 

            if cur == target: 
                res.append(arr.copy()) 
                return 

            for i in range(start, len(c)):  
                if i > start and c[i] == c[i - 1]: 
                    continue 

                arr.append(c[i]) 
                dfs(i + 1, cur + c[i], arr) 
                arr.pop() 

        dfs(0, 0, []) 
        return res
            