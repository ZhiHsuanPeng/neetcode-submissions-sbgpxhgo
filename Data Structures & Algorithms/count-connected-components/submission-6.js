class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) { 
        let graph = new Array(n).fill(0).map(() => [])

        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        }  

        let visited = new Set()

        const dfs = (node) => { 
             for (const nei of graph[node]) {
                if (!visited.has(nei)) {
                    visited.add(nei) 
                    dfs(nei)
                }
             }
        } 

        let count = 0
        for (let i = 0; i < graph.length; i ++) {
            if (!visited.has(i)) { 
                visited.add(i)
                dfs(i) 
                count ++
            }
        } 

        return count
    }
}
