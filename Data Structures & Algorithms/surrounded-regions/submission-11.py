class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows = len(board) 
        cols = len(board[0]) 

        all = [] 
        source = [] 
        for r in range(rows): 
            for c in range(cols): 
                if board[r][c] == 'O' and ( r == 0 or c == 0 or r == rows - 1 or c == cols - 1): 
                    source.append((r, c)) 

                if board[r][c] == 'O': 
                    all.append((r, c)) 


        reachable = set(source) 
        q = deque(source) 

        while q: 
            r, c = q.popleft() 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if (0 <= nr < rows and 
                    0 <= nc < cols and 
                    (nr, nc) not in reachable and 
                    board[nr][nc] == 'O'): 
                    reachable.add((nr, nc)) 
                    q.append((nr, nc)) 


        surrounded = set(all) - reachable 
        for r, c in surrounded: 
            board[r][c] = 'X'
