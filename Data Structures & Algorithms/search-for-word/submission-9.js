class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) { 
        for (let r = 0; r < board.length; r ++) {
            for (let c = 0; c < board[0].length; c ++) {
                if (this.dfs(0, board, r, c, word)) return true
            }
        } 

        return false
    } 

    dfs(i, board, r, c, word) {
        if (i === word.length) {
            return true
        } 

        if (r >= board.length || 
            c >= board[0].length || 
            r < 0 || 
            c < 0 || 
            board[r][c] !== word[i]) {
                return false
            }  

        const temp = board[r][c] 
        board[r][c] = '#'

        const res = this.dfs(i + 1, board, r + 1, c, word) || 
                this.dfs(i + 1, board, r - 1, c, word) || 
                this.dfs(i + 1, board, r, c + 1, word) || 
                this.dfs(i + 1, board, r, c - 1, word) 

        board[r][c] = temp 
        return res
    }
}
