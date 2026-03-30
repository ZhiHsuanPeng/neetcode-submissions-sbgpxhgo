class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */ 
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    pacificAtlantic(heights) { 
        let pac = [] 
        let atl = []
        for (let r = 0; r < heights.length; r ++) {
            for (let c = 0; c < heights[0].length; c ++) {
                if (r === 0 || c === 0) {
                    pac.push([r, c])
                } 

                if (r === heights.length - 1 || c === heights[0].length - 1) {
                    atl.push([r, c])
                }
            }
        }  

        let res = [] 
        const pacCells = this.bfs(pac, heights) 
        const atlCells = this.bfs(atl, heights) 

        for (const node of pacCells) {
            if (atlCells.has(node)) {
                res.push(node.split('_'))
            }
        } 

        

        return res.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    } 


    bfs(cells, heights) {
        let q = []  
        let visited = new Set();   

        for (let [r, c] of cells) {
            q.push([r, c]) 
            visited.add(`${r}_${c}`)
        }

        while(q.length) {
            const [r, c] = q.shift() 
            for (const [dr, dc] of this.dir) {
                const nr = r + dr 
                const nc = c + dc 
                if (this.isValid(nr, nc, heights, visited) && 
                    heights[r][c] <= heights[nr][nc]) {
                    q.push([nr, nc]) 
                    visited.add(`${nr}_${nc}`)
                }
            }
        } 


        return visited
    } 


    isValid(r, c, heights, visited) {
        return ( 
            r >= 0 && 
            c >= 0 && 
            r < heights.length && 
            c < heights[0].length && 
            !visited.has(`${r}_${c}`)
        )
    }
}
