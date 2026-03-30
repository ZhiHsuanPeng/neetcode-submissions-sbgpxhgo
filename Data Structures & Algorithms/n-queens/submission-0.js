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

        const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const res = [];
    this.dfs(n, 0, board, res);
    return res;
    } 


    dfs(n, r, board, res) {
        if (r === n) { 
            let validBoard = board.map((b) => b.join(''))
            res.push([...validBoard])
        } 


        for (let col = 0; col < board.length; col++) {
    if (this.cols.has(col) || this.diag1.has(r - col) || this.diag2.has(r + col)) {
        continue; // skip invalid spots
    }

    // place queen
    board[r][col] = 'Q';
    this.cols.add(col);
    this.diag1.add(r - col);
    this.diag2.add(r + col);

    // recurse to next row
    this.dfs(n, r + 1, board, res);

    // 🔑 backtrack immediately after recursion, before next iteration
    board[r][col] = '.';
    this.cols.delete(col);
    this.diag1.delete(r - col);
    this.diag2.delete(r + col);
}
         

    } 
} 
