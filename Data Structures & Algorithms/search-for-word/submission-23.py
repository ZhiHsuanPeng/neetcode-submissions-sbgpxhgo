class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        def dfs(i, r, c): 
            if i == len(word): 
                return True 

            if not 0 <= r < rows or not 0 <= c < cols or board[r][c] != word[i]: 
                return False 

            temp = board[r][c] 
            board[r][c] = '.'         
            for dr, dc in [ (1, 0), (-1, 0), (0, 1), (0, -1) ]: 
                if dfs(i + 1, r + dr, c + dc): 
                    return True 

            board[r][c] = temp 

        for i in range(rows): 
            for j in range(cols): 
                if board[i][j] == word[0] and dfs(0, i, j): 
                    return True 

        return False