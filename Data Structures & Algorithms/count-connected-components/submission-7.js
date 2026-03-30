class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) { 
        let parent = new Array(n).fill(0).map((_, i) => i) 
        let size = new Array(n).fill(1) 

        const find = (node) => {
            if (parent[node] !== node) {
                parent[node] = find(parent[node])
            } 

            return parent[node]
        } 

        const union = (n1, n2) => {
            let p1 = find(n1) 
            let p2 = find(n2)  

            if (p1 === p2) return false

            if (size[p1] > size[p2]) {
                parent[p2] = p1 
                size[p1] += size[p2]
            } else {
                parent[p1] = p2 
                size[p2] += size[p1]
            } 

            return true
        } 

        let count = n
        for (const [u, v] of edges) {
            if (union(u, v)) count --
        } 

        return count
    }
}
