class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows, cols = len(board), len(board[0])
        border = [] 

        for r in range(rows): 
            for c in range(cols): 
                if ((r in [0, rows - 1] or 
                    c in [0, cols - 1]) and 
                    board[r][c] == 'O'): 
                    border.append((r, c)) 

        q = deque(border) 
        visited = set(border) 

        while q: 
            r, c = q.popleft() 

            for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                nr, nc = r + dr, c + dc 

                if (nr in range(rows) and 
                    nc in range(cols) and 
                    board[nr][nc] == 'O' and 
                    (nr, nc) not in visited): 
                    visited.add((nr, nc)) 
                    q.append((nr, nc))  

        for r in range(rows): 
            for c in range(cols): 
                if ((r, c) not in visited and 
                    board[r][c] == 'O'):
                    board[r][c] = 'X' 



