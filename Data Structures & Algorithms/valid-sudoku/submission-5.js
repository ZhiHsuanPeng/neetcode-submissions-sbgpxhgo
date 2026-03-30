class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let square = new Map();

        for (let r = 0; r < 9; r ++) {
            for (let c = 0; c < 9; c ++) {
                let cur = board[r][c];
                 if (cur === '.') continue;
                let key = `${Math.floor(r/3)}, ${Math.floor(c/3)}`
                if (row.get(r)?.has(cur) || col.get(c)?.has(cur) || square.get(key)?.has(cur)) return false;

                if (!row.has(r)) row.set(r, new Set())
                if (!col.has(c)) col.set(c, new Set())
                if (!square.has(key)) square.set(key, new Set())

                row.get(r).add(cur)
                col.get(c).add(cur)
                square.get(key).add(cur)
            }
        }

        return true
    }
}
