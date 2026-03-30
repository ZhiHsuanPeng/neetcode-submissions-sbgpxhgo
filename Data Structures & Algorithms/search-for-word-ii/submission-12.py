class TrieNode: 
    def __init__(self): 
        self.isEnd = False 
        self.desc = {} 

    def addWord(self, word): 
        node = self 
        for w in word: 
            if not node.desc.get(w): 
                node.desc[w] = TrieNode() 
            node = node.desc[w] 
        node.isEnd = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode() 
        for word in words: 
            root.addWord(word) 

        rows, cols = len(board), len(board[0])   
        result = set()

        def dfs(r, c, node, cur): 
            if (r < 0 or 
                c < 0 or 
                r >= rows or 
                c >= cols or 
                not node.desc.get(board[r][c])):  
                    return 

            cur += board[r][c] 
            nextNode = node.desc.get(board[r][c]) 
            if nextNode.isEnd: 
                result.add(cur) 

            temp = board[r][c] 
            board[r][c] = '.' 

            dfs(r + 1, c, nextNode, cur) 
            dfs(r, c + 1, nextNode, cur) 
            dfs(r - 1, c, nextNode, cur)  
            dfs(r, c - 1, nextNode, cur)
            
            board[r][c] = temp 

        for r in range(rows): 
            for c in range(cols): 
                dfs(r, c, root, '') 

        return [x for x in result]