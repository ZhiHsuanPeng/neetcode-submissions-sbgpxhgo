class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) { 
        candidates.sort((a, b) => a - b) 
        const res = []
        function dfs(start, part) {
            if (target === 0) {
                res.push([...part]) 
                return
            }  

            if (target < 0) return 

            for (let i = start; i < candidates.length; i ++) { 
                if (i > start && candidates[i] === candidates[i - 1]) continue
                part.push(candidates[i]) 
                target -= candidates[i] 
                dfs(i + 1, part) 
                part.pop() 
                target += candidates[i]
            }
        } 

        dfs(0, []) 

        return res
    }
}
