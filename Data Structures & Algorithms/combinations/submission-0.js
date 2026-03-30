class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) { 
        const ans = [] 
        this.dfs(1, n, k, [], ans) 
        return ans
    } 

    dfs(start, n, k, part, res) {
        if (part.length === k) {
            res.push([...part]) 
            return
        } 

        for (let i = start; i <= n; i ++) {
            part.push(i) 
            this.dfs(i + 1, n, k, part, res) 
            part.pop()
        }
    }
}
