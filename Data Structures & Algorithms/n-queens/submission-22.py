class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        col = set() 
        d1 = set() 
        d2 = set() 
        res = [] 

        board = [ [ '.' for _ in range(n) ] for _ in range(n) ] 

        def dfs(r, cur): 
            if r == n: 
                res.append( [ "".join(r) for r in board ]) 
                return 

            for c in range(n): 
                if c in col or c + r in d1 or c - r in d2: 
                    continue 

                col.add(c) 
                d1.add(c + r) 
                d2.add(c - r) 
                cur[r][c] = 'Q' 
                dfs(r + 1, cur) 
                col.remove(c) 
                d1.remove(c + r) 
                d2.remove(c - r) 
                cur[r][c] = '.' 

        dfs(0, board) 
        return res