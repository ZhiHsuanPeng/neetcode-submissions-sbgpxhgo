class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) { 
        const graph = new Array(n).fill(0).map(() => []) 
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        } 

        let visited = new Set()
        
        function dfs(node) {
            if (visited.has(node)) return 

            visited.add(node)
            for (const nei of graph[node]) {
                dfs(nei)
            }
        } 

        let count = 0 
        for (let i = 0; i < graph.length; i ++) {
            if (!visited.has(i)) {
                dfs(i) 
                count ++
            }
        } 

        return count
    }
}
