class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) { 

        const row = new Map() 
        const col = new Map() 
        const grid = new Map() 
        for (let r = 0; r < board.length; r ++) {
            for (let c = 0; c < 9; c ++) {
                let cur = board[r][c] 
                if (cur === ".") continue 

                const gridKey = `${Math.floor(r/3)}, ${Math.floor(c/3)}` 

                if ((row.get(r) && row.get(r).has(cur)) ||  
                    (col.get(c) && col.get(c).has(cur)) || 
                    (grid.get(gridKey) && grid.get(gridKey).has(cur))) { 
                        return false
                    } 

                if (!row.get(r)) row.set(r, new Set()) 
                if (!col.get(c)) col.set(c, new Set()) 
                if (!grid.get(gridKey)) grid.set(gridKey, new Set()) 


                row.get(r).add(cur) 
                col.get(c).add(cur) 
                grid.get(gridKey).add(cur)
            }
        } 

        return true
    }
}
