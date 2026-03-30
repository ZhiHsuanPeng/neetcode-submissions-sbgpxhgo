class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {  
        let result = []
        candidates.sort((a, b) => a - b) 
         
        function dfs(i, cur, curSum) { 
            if (curSum === target) {
                result.push([...cur]) 
                return 
            } 
            
            if (i >= candidates.length || curSum > target) {
                return
            } 

          

            cur.push(candidates[i]) 
            dfs(i + 1, cur, curSum + candidates[i]) 
            cur.pop()  

              let next = i + 1
            while (next < candidates.length && candidates[next] === candidates[i]) {
                next++
            }
            dfs(next, cur, curSum)
        } 

        dfs(0, [], 0) 

        return result
    }
}
