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
        const board = new Array(n).fill(0).map(() => new Array(n).fill('.')) 
        const res = [] 
        this.dfs(n, 0, board, res) 
        return res
    } 

    dfs(n, r, board, res) {
        if (r === n) {
            res.push(board.map(b => b.join(''))) 
            return
        } 

        for (let i = 0; i < board[0].length; i ++) { 
            if (this.isValid(r, i)) {
                board[r][i] = 'Q' 
                this.cols.add(i) 
                this.diag1.add(r + i) 
                this.diag2.add(r - i) 
                this.dfs(n, r + 1, board, res) 
                board[r][i] = '.'  
                this.cols.delete(i)
                this.diag1.delete(r + i) 
                this.diag2.delete(r - i)
            }  
        }
    } 

    isValid(r, c) {
        return ( 
            !this.cols.has(c) && 
            !this.diag1.has(r + c) && 
            !this.diag2.has(r - c) 
        )
    }
}
