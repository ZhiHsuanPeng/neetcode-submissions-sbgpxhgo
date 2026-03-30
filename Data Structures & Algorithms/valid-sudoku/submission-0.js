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
                // get the number of the cell
                let cell = board[i][j]
                if (cell === '.') continue;
                let squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`

                // if either of the condition is true, then this is an invalid soduku
                if (row.get(i)?.has(cell) || col.get(j)?.has(cell) || square.get(squareKey)?.has(cell)) {
                    return false
                }

                // add current cell to corresponding row, col, square
                if (!(row.get(i))) row.set(i, new Set())
                if (!(col.get(j))) col.set(j, new Set())
                if (!(square.get(squareKey))) square.set(squareKey, new Set())

                row.get(i).add(cell);
                col.get(j).add(cell);
                square.get(squareKey).add(cell);

            }
        }

        return true
        
    }
}
