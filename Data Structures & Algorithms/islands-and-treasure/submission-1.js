class Solution {
    /**
     * @param {number[][]} grid
     */ 
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    islandsAndTreasure(grid) { 
        let q = [] 
        const visited = new Set()

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === 0) {
                    q.push([r, c, 0])
                }
            }
        } 


        while(q.length) {
            const [r, c, dist] = q.shift() 

            for (let [dr, dc] of this.dir) { 
                const nr = r + dr 
                const nc = c + dc 

                if (this.isValid(grid, nr, nc, visited)) {
                    q.push([nr, nc, dist + 1]) 
                    grid[nr][nc] = dist + 1 
                    visited.add(`${nr}_${nc}`)
                }
            }
        } 

        return grid
    } 

    isValid(grid, r, c, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            !visited.has(`${r}_${c}`) && 
            grid[r][c] !== -1 && 
            grid[r][c] !== 0
        )
    }
}
