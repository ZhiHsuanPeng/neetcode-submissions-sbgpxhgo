class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */ 

    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    maxAreaOfIsland(grid) { 
        let visited = new Set()   
        let max = 0

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) { 
                if (grid[r][c] === 1 && !visited.has(`${r}_${c}`)) {
                    let area = this.dfs(grid, r, c, visited) 
                    max = Math.max(area, max)
                }
            }
        } 

        return max
     } 

    dfs(grid, r, c, visited) {
        if (!this.isValid(grid, r, c, visited)) {
            return 0
        } 
        
        visited.add(`${r}_${c}`)  
        let area = 1

        for (const [dr, dc] of this.dir) {
            const newR = r + dr 
            const newC = c + dc 
            area += this.dfs(grid, newR, newC, visited, area)
        } 

        return area
    } 

    isValid(grid, r, c, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            !visited.has(`${r}_${c}`) && 
            grid[r][c] === 1        
        )
    }
}
