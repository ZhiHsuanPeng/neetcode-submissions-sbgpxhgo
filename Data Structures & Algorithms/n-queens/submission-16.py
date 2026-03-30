class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        board = [ ['.'] * n  for _ in range(n) ] 
        res = [] 
        d1 = set() 
        d2 = set() 
        col = set() 

        def dfs(r, n, part):
            if r == n: 
                res.append([''.join(row) for row in board])
                return  

            for c in range(n): 
                if ( 
                    r + c in d1 or 
                    r - c in d2 or 
                    c in col
                    ): 
                        continue 

                d1.add(r + c) 
                d2.add(r - c) 
                col.add(c) 
                part[r][c] = 'Q' 
                dfs(r + 1, n, part) 
                d1.remove(r + c) 
                d2.remove(r - c) 
                col.remove(c) 
                part[r][c] = '.'
        
        dfs(0, n, board) 
        return res