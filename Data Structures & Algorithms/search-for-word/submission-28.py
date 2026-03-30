class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        def dfs(r, c, i): 
            if board[r][c] != word[i]: 
                return False 

            if i == len(word) - 1: 
                return True 

            temp = board[r][c] 
            board[r][c] = '.'

            res = False
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '.': 
                    res = res or dfs(nr, nc, i + 1) 

            board[r][c] = temp 
            return res 


        for r in range(rows): 
            for c in range(cols): 
                if dfs(r, c, 0): 
                    return True 


        return False