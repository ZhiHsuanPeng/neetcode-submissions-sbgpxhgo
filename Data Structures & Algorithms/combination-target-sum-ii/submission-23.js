class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) { 
        let result = []  

        candidates.sort()

        function dfs(j, cur, curSum) {
            if (curSum === target) {
                result.push([...cur]) 
                return 
            } 

            if (j >= candidates.length || curSum > target) {
                return
            } 
 

            for (let i = j; i < candidates.length; i ++) { 
                if (i > j && candidates[i] === candidates[i - 1]) continue
                cur.push(candidates[i]) 
                dfs(i + 1, cur, curSum + candidates[i]) 
                cur.pop()
            }
        } 

        dfs(0, [], 0) 

        return result
    }
}
