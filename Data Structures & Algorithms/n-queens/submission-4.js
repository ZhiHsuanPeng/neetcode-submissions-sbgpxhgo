class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */ 
    constructor() {
        this.cols = new Set() 
        this.diag1 = new Set() 
        this.diag2 = new Set()
    } 

    solveNQueens(n) { 
        const board = new Array(n).fill(null).map(() => new Array(n).fill('.')) 
        const res = [] 
        this.dfs(n, 0, board, res) 
        return res
    } 

    dfs(n, r, board, res) {
        if (n === r) {
            res.push(board.map(b => b.join(''))) 
            return
        } 

        for (let c = 0; c < n; c ++) {
            if (this.isValid(r, c)) {
                board[r][c] = 'Q' 
                this.cols.add(c) 
                this.diag1.add(r + c) 
                this.diag2.add(r - c) 
                this.dfs(n, r + 1, board, res) 
                board[r][c] = '.' 
                this.cols.delete(c) 
                this.diag1.delete(r + c) 
                this.diag2.delete(r - c)
            }
        }
    } 

    isValid(r, c) {
        return !this.cols.has(c) && 
                !this.diag1.has(r + c) && 
                !this.diag2.has(r - c)
    }
}
