class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) { 
        let visited = new Set() 
        let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
         

        function isValid(r, c, grid, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < grid.length && 
            c < grid[0].length && 
            grid[r][c] === '1' && 
            !visited.has(`${r}_${c}`)
        )
    } 

        function bfs(r, c) {
            let q = [[r, c]] 

            while(q.length) {
                const [r, c] = q.shift() 

                
                for (const [dr, dc] of dir) {
                    const nr = r + dr 
                    const nc = c + dc 

                    if (isValid(nr, nc, grid, visited)) { 
                        visited.add(`${nr}_${nc}`) 
                        q.push([nr, nc])
                    }
                }
            }
        }  

        


        let count = 0   

        for (let r = 0; r < grid.length; r ++) {
            for (let c = 0; c < grid[0].length; c ++) {
                if (grid[r][c] === '1' && !visited.has(`${r}_${c}`)) {
                    bfs(r, c) 
                    count ++
                }
            }
        } 

        return count
    } 

     

}
