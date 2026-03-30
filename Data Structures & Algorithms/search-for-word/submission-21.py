class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        def dfs(r, c, i): 
            if i == len(word): 
                return True 

            if not ( 0 <= r < rows and 0 <= c < cols and board[r][c] == word[i] ): 
                return False 

            temp = board[r][c]
            board[r][c] = -1 

            res = False 
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 
                res = res or dfs(nr, nc, i + 1) 

            board[r][c] = temp 

            return res 

        for r in range(rows): 
            for c in range(cols): 
                if board[r][c] == word[0]: 
                    if dfs(r, c, 0): 
                        return True 

        return False
        