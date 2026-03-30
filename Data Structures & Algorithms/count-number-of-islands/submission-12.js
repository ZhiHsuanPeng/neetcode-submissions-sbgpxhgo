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
                if (this.isValid(r, c, grid, visited)) { 
                    count ++
                    this.dfs(r, c, grid, visited)
                }
            }
        } 

        return count
    } 

    dfs(r, c, grid, visited) {
        visited.add(`${r}_${c}`)

        for (const [dr, dc] of this.dir) {
            const nr = r + dr 
            const nc = c + dc 
            if (this.isValid(nr, nc, grid, visited)) {
                this.dfs(nr, nc, grid, visited)
            }
        }
    } 

    isValid(r, c, grid, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            grid[r][c] === '1' && 
            !visited.has(`${r}_${c}`)
        )
    }
}
