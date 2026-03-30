class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Map();
        let column = new Map();
        let square = new Map();
        for (let r = 0; r < 9; r ++) {
            for (let c = 0; c < 9; c ++) {
                let cell = board[r][c];
                let squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if (cell === '.') continue;

                //  check if there is a duplicated value
                if (row.get(r)?.has(cell) || column.get(c)?.has(cell) || square.get(squareKey)?.has(cell)) {
                    return false
                }

                // initialize r, c, square if not exist
                if (!row.has(r)) row.set(r, new Set())
                if (!column.has(c)) column.set(c, new Set())
                if (!square.has(squareKey)) square.set(squareKey, new Set())

                row.get(r).add(cell);
                column.get(c).add(cell);
                square.get(squareKey).add(cell)
            }
        }
        return true
    }
}
