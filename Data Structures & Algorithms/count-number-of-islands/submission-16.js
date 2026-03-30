class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */ 
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    numIslands(grid) { 
        const visited = new Set() 
        let count = 0
        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (!visited.has(`${r},${c}`) && grid[r][c] === "1") {
                    this.bfs(r, c, grid, visited) 
                    count ++
                }
            }
        } 

        return count
    } 

    bfs(r, c, grid, visited) {
        let q = [[r, c]]  
        let head = 0  

        visited.add(`${r},${c}`)
        while(head < q.length) {
            const [r, c] = q[head ++] 

            for (const [dr, dc] of this.dir) {
                const nr = r + dr 
                const nc = c + dc 
                if (this.isValid(nr, nc, grid, visited)) {
                    q.push([nr, nc]) 
                    visited.add(`${nr},${nc}`)
                }
            }
        }
    } 

    isValid(r, c, grid, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            !visited.has(`${r},${c}`) && 
            grid[r][c] === "1"
        )
    }
}
