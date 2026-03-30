class Node: 
    def __init__(self): 
        self.isEnd = False 
        self.desc = {}

class Trie: 
    def __init__(self): 
        self.root = Node() 

    def addWord(self, w): 
        node = self.root 

        for c in w: 
            if c not in node.desc: 
                node.desc[c] = Node() 

            node = node.desc[c] 

        node.isEnd = True    


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        rows = len(board) 
        cols = len(board[0]) 

        trie = Trie() 
        for w in words: 
            trie.addWord(w) 

        res = set() 

        def dfs(r, c, node, cur): 
            char = board[r][c] 

            if char not in node.desc: 
                return 
            
            next_node = node.desc[char] 
            cur += char 

            if next_node.isEnd: 
                res.add(cur) 

            board[r][c] = '.' 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '.': 
                    dfs(nr, nc , next_node, cur) 

            board[r][c] = char 

        for r in range(rows): 
            for c in range(cols): 
                dfs(r, c, trie.root, '') 

        return list(res)