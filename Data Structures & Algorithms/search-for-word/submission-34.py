class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        def dfs(i, r, c): 
            if i == len(word): 
                return True 

            if not (0 <= r < rows and 0 <= c < cols and board[r][c] == word[i]): 
                return False 

            temp = board[r][c] 
            board[r][c] = '.' 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if dfs(i + 1, nr, nc): 
                    return True 

            board[r][c] = temp 
            return False 

        for r in range(rows): 
            for c in range(cols): 
                if dfs(0, r, c): 
                    return True 

        return False