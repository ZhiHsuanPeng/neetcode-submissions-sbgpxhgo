class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */ 

    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    orangesRotting(grid) { 
        let fresh = 0 
        let q = [] 

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === 1) {
                    fresh ++
                } else if (grid[r][c] === 2) {
                    q.push([r, c])
                }
            }
        }  

        if (fresh === 0) return 0

        let min = 0 
        let visited = new Set()
        while(q.length) {
            const size = q.length  
            min ++
            for (let i = 0; i < size; i ++) {
                const [r, c] = q.shift() 
                for (const [dr, dc] of this.dir) { 
                    const nr = r + dr 
                    const nc = c + dc
                    if (this.isValid(nr, nc, grid, visited)) { 
                        fresh --
                        visited.add(`${nr}_${nc}`) 
                        q.push([nr, nc])
                    } 
                } 
            }
        } 

        return fresh === 0 ? min - 1: -1
    } 

    isValid(r, c, grid, visited) {
        return (r >= 0 && 
                c >= 0 && 
                r < grid.length && 
                c < grid[0].length && 
                grid[r][c] === 1 &&  
                !visited.has(`${r}_${c}`))
    }
}
