class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        cols = set() 
        diag1 = set() 
        diag2 = set() 

        res = [] 
        board = [ ['.' for _ in range(n)] for _ in range(n) ]

        def dfs(r, n, cur): 
            if r == n:  
                b = [ ''.join(row) for row in cur ]
                res.append(b) 
                return 

            for c in range(n): 
                if c in cols or r - c in diag1 or r + c in diag2: 
                    continue 

                cols.add(c) 
                diag1.add(r - c) 
                diag2.add(r + c) 
                cur[r][c] = 'Q' 
                dfs(r + 1, n, cur) 
                cur[r][c] = '.' 
                cols.remove(c) 
                diag1.remove(r - c) 
                diag2.remove(r + c) 

        dfs(0, n, board) 
        return res  
                