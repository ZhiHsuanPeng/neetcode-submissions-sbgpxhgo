class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        grid = defaultdict(set) 

        for r in range(9): 
            for c in range(9):  
                if board[r][c] == '.': 
                    continue
                    
                values = board[r][c] 

                gridKey = (r // 3, c // 3) 

                rSet = rows[r] 
                cSet = cols[c] 
                gridSet = grid[gridKey] 

                if values in rSet or values in cSet or values in gridSet: 
                    return False 

                rSet.add(values) 
                cSet.add(values) 
                gridSet.add(values) 

        return True


