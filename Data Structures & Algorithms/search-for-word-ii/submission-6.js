class TrieNode {
    constructor() {
        this.isEnd = false 
        this.desc = new Map() 
    } 

    addWord(word) { 
        let node = this
        for (const w of word) {
            if (!node.desc.get(w)) {
                node.desc.set(w, new TrieNode())
            }  
            node = node.desc.get(w)
        } 

        node.isEnd = true
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) { 
        const rows = board.length 
        const cols =  board[0].length 
        const root = new TrieNode() 
        for (const word of words) {
            root.addWord(word)
        }   

        const result = new Set()

        const dfs = (r, c, node, cur) => {
            if (r < 0 || 
                c < 0 || 
                r >= rows || 
                c >= cols || 
                !node.desc.has(board[r][c])) return 

            cur = cur + board[r][c]  
            const nextNode = node.desc.get(board[r][c])  
            if (nextNode.isEnd) {
                result.add(cur)
            }  
            
            let temp = board[r][c] 
            board[r][c] = '.'

            dfs(r + 1, c, nextNode, cur) 
            dfs(r, c + 1, nextNode, cur) 
            dfs(r - 1, c, nextNode, cur) 
            dfs(r, c - 1, nextNode, cur) 

            board[r][c] = temp
        } 

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c ++) {
                dfs(r, c, root, '')
            }
        } 

        return Array.from(result)
    }
}
