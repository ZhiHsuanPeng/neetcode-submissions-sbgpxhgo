class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */ 
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    numIslands(grid) { 
        if (!grid || grid.length === 0) return 0 
        let count = 0 
        let visited = new Set()
        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === '1' && !visited.has(`${r}_${c}`)) {
                    this.bfs(grid, r, c, visited) 
                    count ++
                }
            }
        }  

        return count
    } 

    bfs(grid, r, c, visited) {
        let stack = [[r, c]]  

        while(stack.length) {
            const [curR, curC] = stack.pop()  

            visited.add(`${curR}_${curC}`)

            for (const [dr, dc] of this.dir) { 
                const newR = curR + dr 
                const newC = curC + dc 
                if (this.isValid(newR, newC, grid, visited)) {
                    stack.push([newR, newC]) 
                    visited.add(`${newR}_${newC}`)
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
            grid[r][c] === '1' && 
            !visited.has(`${r}_${c}`)
        )
    }
}
