class Node: 
    def __init__(self): 
        self.desc = {} 
        self.isEnd = False 

class Trie: 
    def __init__(self): 
        self.root = Node() 
         
    def addWord(self, word): 
        node = self.root 

        for c in word: 
            if c not in node.desc: 
                node.desc[c] = Node() 
            
            node = node.desc[c] 

        node.isEnd = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:  
        rows = len(board) 
        cols = len(board[0])

        trie = Trie() 
        root = trie.root 

        for w in words: 
            trie.addWord(w)  

        res = set()

        def dfs(r, c, node, curWord): 
            if board[r][c] not in node.desc: 
                return 

            curWord += board[r][c]
            nextNode = node.desc[board[r][c]] 
            if nextNode.isEnd:  
                res.add(curWord) 

            temp = board[r][c]
            board[r][c] = '.' 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 
                if 0 <= nr < rows and 0 <= nc < cols: 
                    dfs(nr, nc, nextNode, curWord) 

            board[r][c] = temp 

        for r in range(rows): 
            for c in range(cols): 
                dfs(r, c, root, "") 

        return list(res)
        