class Node: 
    def __init__(self): 
        self.desc = {} 
        self.isEnd = False 

class Trie: 
    def __init__(self): 
        self.root = Node() 

    def addWord(self, word): 
        node = self.root 

        for w in word: 
            if w not in node.desc: 
                node.desc[w] = Node() 

            node = node.desc[w] 

        node.isEnd = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        rows = len(board) 
        cols = len(board[0]) 
        res = set()  

        trie = Trie() 
        for w in words: 
            trie.addWord(w)

        def dfs(r, c, node, cur): 
            if not 0 <= r < rows or not 0 <= c < cols or board[r][c] not in node.desc: 
                return False 

            curWord = board[r][c] 
            curNode = node.desc[curWord]
            cur += curWord 

            if curNode.isEnd: 
                res.add(cur)  

            board[r][c] = '.'

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                dfs(r + dr, c + dc, curNode, cur)
 
            board[r][c] = curWord    

        for i in range(rows): 
            for j in range(cols): 
                dfs(i, j, trie.root, "")   

        return [ w for w in res ]       

     


