class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) { 
        if (n !== edges.length + 1) return false 

        let graph = new Array(n).fill(0).map(() => []) 
        for (const [n1, n2] of edges) {
            graph[n1].push(n2) 
            graph[n2].push(n1)
        } 
 
        let visited = new Set()
        const q = [0] 
        let head = 0 
        while(head < q.length) {
            let curNode = q[head ++] 
            if (visited.has(curNode)) continue 
            visited.add(curNode) 

            for (const nei of graph[curNode]) { 
                if (!visited.has(nei)) {
                    q.push(nei)
                }    
            }
        } 

        return visited.size === n   
    }
}
