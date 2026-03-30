class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {  
        let ROWS = board.length 
        let COLS = board[0].length

        function dfs(i, r, c) {
            if (i === word.length) {
                return true
            } 

            if (r < 0 || 
                c < 0 || 
                r >= ROWS || 
                c >= COLS || 
                board[r][c] !== word[i] || 
                board[r][c] === '#') {
                    return false
                } 
            
            const temp = board[r][c] 
            board[r][c] = '#'
            const res = dfs(i + 1, r + 1, c) || 
                        dfs(i + 1, r - 1, c) || 
                        dfs(i + 1, r, c + 1) || 
                        dfs(i + 1, r, c - 1) 
            board[r][c] = temp 

            return res
        }  

        for (let r = 0; r < ROWS; r ++) {
            for (let c = 0; c < COLS; c ++) {
                if (dfs(0, r, c)) return true
            }
        } 

        return false
    }
}
