class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) { 
        const len = edges.length + 1
        const parent = new Array(len).fill(0) 
        const rank = new Array(len).fill(1)

        for (let i = 0; i < len; i ++) {
            parent[i] = i
        } 

        function find(n) {
            if (parent[n] !== n) {
                parent[n] = find(parent[n])
            } 

            return parent[n]
        } 

        function union(n1, n2) {
            let p1 = find(n1) 
            let p2 = find(n2) 

            if (p1 === p2) {
                return false
            } 

            if (rank[p1] > rank[p2]) {
                parent[p2] = p1 
                rank[p1] += rank[p2]
            } else {
                parent[p1] = p2 
                rank[p2] += rank[p1]
            } 

            return true
        } 

        for (const [u, v] of edges) {
            if (!union(u,v)) {
                return [u, v]
            }
        } 
    }
}
