class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) { 
        const visited = new Set() 
        const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]] 
        const q = []

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === 0) {
                    q.push([r, c, 0])
                }
            }
        } 

        while(q.length) {
            const [r, c, dist] = q.shift() 

            for (let [dr, dc] of dir) {
                const nr = r + dr 
                const nc = c + dc 

                if (this.isValid(nr, nc, grid, visited)) {
                    visited.add(`${nr}_${nc}`) 
                    q.push([nr, nc, dist + 1]) 
                    grid[nr][nc] = dist + 1
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
            !visited.has(`${r}_${c}`) && 
            grid[r][c] !== 0 &&
            grid[r][c] !== -1
        )
    }
}
