class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        cSet = set() 
        d1 = set() 
        d2 = set() 

        res = [] 

        def dfs(r, board): 
            if r == n: 
                copy = [ "".join(r) for r in board ] 
                res.append(copy) 
                return  

            for i in range(n):  

                if i in cSet or r + i in d1 or r - i in d2: 
                    continue 

                cSet.add(i) 
                d1.add(r + i) 
                d2.add(r - i) 
                board[r][i] = 'Q' 
                dfs(r + 1, board) 
                cSet.remove(i) 
                d1.remove(r + i) 
                d2.remove(r - i) 
                board[r][i] = '.' 

        board = [ [ '.' for _ in range(n) ] for _ in range(n) ] 

        dfs(0, board) 

        return res