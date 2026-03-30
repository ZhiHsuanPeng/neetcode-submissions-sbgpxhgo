class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */ 

    exist(board, word) {
        let rows =  board.length 
        let cols = board[0].length 

        const dfs = (i, r, c, visited) => {
            if (i === word.length) return true 

            if (!( 
                r >= 0 && 
                c >= 0 && 
                r < rows && 
                c < cols && 
                board[r][c] === word[i] && 
                !visited.has(`${r}_${c}`)
            )) return false 

            visited.add(`${r}_${c}`) 

            const res = dfs(i + 1, r + 1, c, visited) || 
                        dfs(i + 1, r - 1, c, visited) || 
                        dfs(i + 1, r, c + 1, visited,) || 
                        dfs(i + 1, r, c - 1, visited) 

            visited.delete(`${r}_${c}`) 

            return res
        }  

        let visited = new Set()
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (word[0] === board[r][c]) {
                    const res = dfs(0, r, c, visited) 
                    if (res) return true
                }
            }
        } 

        return false
    }
}
