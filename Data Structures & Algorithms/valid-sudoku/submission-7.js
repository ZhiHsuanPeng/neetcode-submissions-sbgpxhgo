class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) { 

        let row = new Map() 
        let col = new Map() 
        let grid = new Map() 

        for (let r = 0; r < 9; r ++) {
            for (let c = 0; c < 9; c ++) {
                let num = board[r][c]  
                if (num === '.') continue 

                let gridKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}` 

                if (row.get(r)?.has(num) || col.get(c)?.has(num) || grid.get(gridKey)?.has(num)) {
                    return false
                } 

                if (!row.get(r)) row.set(r, new Set()) 
                if (!col.get(c)) col.set(c, new Set()) 
                if (!grid.get(gridKey)) grid.set(gridKey, new Set()) 

                row.get(r).add(num) 
                col.get(c).add(num) 
                grid.get(gridKey).add(num)
            }
        } 

        return true
    }
}
