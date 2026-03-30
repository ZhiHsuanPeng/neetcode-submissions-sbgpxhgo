class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {  
        const len = edges.length + 1
        let parent = new Array(len).fill(0) 
        let rank = new Array(len).fill(1)  

        for (let i = 0; i < edges.length + 1; i ++) {
            parent[i] = i
        } 

        function find(node) {
            if (parent[node] !== node) {
                parent[node] = find(parent[node])
            } 

            return parent[node]
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
            if (!union(u, v)) {
                return [u, v]
            }
        } 

        return []
    }
}
