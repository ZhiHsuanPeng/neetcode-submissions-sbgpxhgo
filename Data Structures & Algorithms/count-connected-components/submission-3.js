class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {  
        const parent = new Array(n).fill(0).map((_, i) => i) 
        const rank = new Array(n).fill(1) 

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
 
        let components = n
        for (const [u, v] of edges) { 
            if (union(u, v)) {
                components --
            }
        }  

        return components
    }
}
