class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        def dfs(i, r, c): 
            if i == len(word): 
                return True 

            if ( r < 0 or 
                c < 0 or 
                r >= rows or 
                c >= cols or 
                board[r][c] != word[i] ) : 
                return False 

            temp = board[r][c] 
            board[r][c] = '.' 

            found = ( dfs(i + 1, r + 1, c) or 
                    dfs(i + 1, r - 1, c) or 
                    dfs(i + 1, r, c + 1) or 
                    dfs(i + 1, r, c - 1) )

            board[r][c] = temp 
            return found 

        for r in range(rows): 
            for c in range(cols): 
                if board[r][c] == word[0]: 
                    found = dfs(0, r, c) 
                    if found: 
                        return True 

        return False