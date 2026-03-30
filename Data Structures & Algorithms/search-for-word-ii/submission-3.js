class TrieNode {
    constructor() {
        this.isEnd = false 
        this.next = new Map() 
    } 

    addWord(word) {
        let cur = this 
        for (const w of word) {
            if (!cur.next.has(w)) {
                cur.next.set(w, new TrieNode())
            } 

            cur = cur.next.get(w)
        } 

        cur.isEnd = true
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
        const cols = board[0].length 
        const root = new TrieNode() 
        for (const word of words) {
            root.addWord(word)
        } 

        const result = new Set() 
        const visited = new Set()

        const dfs = (r, c, curWord, node) => {
            if (!(
                r >= 0 &&    
                c >= 0 && 
                r < rows && 
                c < cols &&  
                !visited.has(`${r},${c}`) &&
                node.next.has(board[r][c]))) return false 

            let nextNode = node.next.get(board[r][c]) 
            const newWord = curWord + board[r][c]
            visited.add(`${r},${c}`)
            if (nextNode.isEnd) {
                result.add(newWord)
            } 

            dfs(r + 1, c, newWord, nextNode) 
            dfs(r - 1, c, newWord, nextNode) 
            dfs(r, c + 1, newWord, nextNode) 
            dfs(r, c - 1, newWord, nextNode) 

            visited.delete(`${r},${c}`)
        } 


        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                dfs(r, c, '', root)
            }
        } 

        return Array.from(result)
    }
}
