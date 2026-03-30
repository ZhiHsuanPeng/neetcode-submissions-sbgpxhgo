class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {   
        const rows = board.length 
        const cols = board[0].length
         
        const dfs = (i, r, c, visited) => { 
            if (i === word.length) return true 

            const pos = `${r},${c}` 
            if (!( 
                r >= 0 && 
                c >= 0 && 
                r < rows && 
                c < cols &&
                board[r][c] === word[i] && 
                !visited.has(pos)
            )) return false 

            visited.add(pos) 
            const res = dfs(i + 1, r + 1, c, visited) || 
                        dfs(i + 1, r, c + 1, visited) || 
                        dfs(i + 1, r - 1, c, visited) || 
                        dfs(i + 1, r, c - 1, visited) 
            visited.delete(pos) 

            return res
        } 

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === word[0]) {
                    const res = dfs(0, r, c, new Set()) 
                    if (res) return true
                }
            }
        } 

        return false
    }
}
