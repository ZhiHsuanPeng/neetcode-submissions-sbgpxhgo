class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) { 
        let q = [] 
        let count = 0 

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === 2) {
                    q.push([r, c])
                } else if (grid[r][c] === 1) {
                    count ++
                }
            }
        }  

        if (count === 0) return 0

        let res = -1  
        let visited = new Set()  
        let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        while(q.length) { 
               res ++  
            const batch = q.length
            for (let i = 0; i < batch; i ++) {
                const [r, c] = q.shift() 
                for (const [dr, dc] of dir) {
                    const nr = r + dr 
                    const nc = c + dc 
                    if (this.isValid(nr, nc, grid, visited)) {
                        count --  
                        grid[nr][nc] = 2
                        q.push([nr, nc]) 
                        visited.add(`${nr}_${nc}`)
                    }
                }
            }  

          
        } 

        return count === 0 ? res : -1 
    } 

    isValid(r, c, grid, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            grid[r][c] === 1 && 
            !visited.has(`${r}_${c}`)
        )
    }
}
