class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) { 
        const result = []  
        candidates.sort()

        function dfs(start, total, cur) {
            if (total === target) {
                result.push([...cur]) 
                return
            } 

            if (start >= candidates.length || total > target) {
                return
            } 

            for (let i = start; i < candidates.length; i ++) { 
                if (i > start && candidates[i] === candidates[i - 1]) continue
                cur.push(candidates[i])
                dfs(i + 1, total + candidates[i], cur) 
                cur.pop()
            }
        } 

        dfs(0, 0, []) 

        return result
    }
}
