class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       let row = new Map();
       let col = new Map();
       let square = new Map();

       for (let i = 0; i < 9; i ++) {
        for (let j = 0; j < 9; j ++) {
            
            let cell = board[i][j]
            if (cell === '.') continue;

            let squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`

            if (row.get(i)?.has(cell) || col.get(j)?.has(cell) || square.get(squareKey)?.has(cell)) {
                return false
            }

            if (!row.has(i)) row.set(i, new Set())
            if (!col.has(j)) col.set(j, new Set())
            if (!square.has(squareKey)) square.set(squareKey, new Set())

            // add cell value to its row col square
            row.get(i).add(cell)
            col.get(j).add(cell)
            square.get(squareKey).add(cell)
        }
       }
       return true
    }
}
