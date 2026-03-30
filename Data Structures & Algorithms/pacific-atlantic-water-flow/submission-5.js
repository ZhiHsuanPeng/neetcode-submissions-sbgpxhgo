class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */ 
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    pacificAtlantic(heights) { 
        let res = [] 

        for (let r = 0; r < heights.length; r ++) {
            for (let c = 0; c < heights[0].length; c ++) {
                if (this.bfs(r, c, heights)) {
                    res.push([r, c])
                }
            }
        } 

        return res
    } 


    bfs(r, c, heights) {
        let q = [[r, c]]  
        let visited = new Set([`${r}_${c}`]); 
        let isPacficReached = false 
        let isAtlanticReached = false 

        while(q.length) {
            const [r, c] = q.shift() 
            for (const [dr, dc] of this.dir) {
                const nr = r + dr 
                const nc = c + dc 
                if (nr < 0 || nc < 0) isPacficReached = true 
                if (nr >= heights.length || nc >= heights[0].length) isAtlanticReached = true 
                if (this.isValid(nr, nc, heights, visited) && 
                    heights[r][c] >= heights[nr][nc]) {
                    q.push([nr, nc]) 
                    visited.add(`${nr}_${nc}`)
                }
            }
        } 


        return isPacficReached && isAtlanticReached
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
