class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    constructor() {
        this.dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    solve(board) { 
        let visited = new Set()  

        let border = []

        // collecting all border nodes
       for (let c = 0 ; c < board[0].length; c ++) { 
            if (board[0][c] === 'O') {
                border.push([0, c])
            }
            
            if (board[board.length - 1][c] === 'O') {
                border.push([board.length - 1, c])
            }
        } 

        for (let r = 0; r < board.length; r ++) { 
            if (board[r][0] === 'O') {
                border.push([r, 0])
            }
             
            if (board[r][board[0].length - 1] === 'O') {
                border.push([r, board[0].length - 1])
            }
        } 

        for (const [r, c] of border) { 
            this.bfs(r, c, board, visited)
        } 

        for (let r = 1; r < board.length - 1; r ++) {
            for (let c = 1; c < board[0].length - 1; c ++) {
                if (!visited.has(`${r}_${c}`) && board[r][c] === 'O') {
                    board[r][c] = 'X'
                }
            }
        }
    } 

    bfs(r, c, board, visited) {
        let q = [[r, c]] 
        visited.add(`${r}_${c}`) 

        let head = 0

        while(head < q.length) {
            const [r, c] = q[head ++]
            for (const [dr, dc] of this.dir) {
                const nr = r + dr 
                const nc = c + dc  
                if (this.isValid(nr, nc, board, visited)) {
                    q.push([nr, nc]) 
                    visited.add(`${nr}_${nc}`)
                } 
            }
        } 

    } 

    isValid(r, c, board, visited) {
        return ( 
            r >= 0 &&
            c >= 0 && 
            r < board.length && 
            c < board[0].length && 
            board[r][c] === 'O' && 
            !visited.has(`${r}_${c}`)
        )
    }
}
