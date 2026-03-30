class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows = len(board) 
        cols = len(board[0])  
        q = deque()

        for r in range(rows): 
            for c in range(cols): 
                if board[r][c] == 'O' and ( r == 0 or r == rows - 1 
                    or c == 0 or c == cols - 1): 
                        board[r][c] = 'S' 
                        q.append((r, c)) 

        print(board)

        while q: 
            r, c = q.popleft() 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if (0 <= nr < rows and 
                    0 <= nc < cols and  
                    board[nr][nc] == 'O'): 
                        board[nr][nc] = 'S' 
                        q.append((nr, nc)) 

        for r in range(rows): 
            for c in range(cols): 
                if board[r][c] == 'S': 
                    board[r][c] = 'O' 
                elif board[r][c] == 'O': 
                    board[r][c] = 'X'