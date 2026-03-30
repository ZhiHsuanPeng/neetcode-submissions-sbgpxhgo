class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort() 

        res = [] 

        def dfs(start, cur, arr): 
            if cur == target: 
                res.append(arr.copy()) 
                return 

            if cur > target: 
                return 

            for i in range(start, len(candidates)): 
                if i > start and candidates[i] == candidates[i - 1]: 
                    continue 

                arr.append(candidates[i]) 
                dfs(i + 1, cur + candidates[i], arr) 
                arr.pop() 

        dfs(0, 0, []) 
        return res