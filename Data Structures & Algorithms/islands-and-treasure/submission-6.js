class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) { 
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

                if (
  nr >= 0 && nc >= 0 &&
  nr < grid.length && nc < grid[0].length &&
  grid[nr][nc] === 2147483647
) {
  q.push([nr, nc, dist + 1]);
  grid[nr][nc] = dist + 1;
}
            }
        }
    } 
}
