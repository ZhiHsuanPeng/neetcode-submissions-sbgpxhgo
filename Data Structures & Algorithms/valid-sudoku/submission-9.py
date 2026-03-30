class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rDict = defaultdict(set) 
        cDict = defaultdict(set)
        gDict = defaultdict(set)

        for r in range(len(board)): 
            for c in range(len(board[0])): 
                val = board[r][c] 
                if val == '.': 
                    continue 

                gridKey = f"{r//3},{c//3}"
                rSet = rDict[r] 
                cSet = cDict[c] 
                gSet = gDict[gridKey] 

                if val in rSet or val in cSet or val in gSet: 
                    return False 

                rSet.add(val) 
                cSet.add(val) 
                gSet.add(val) 
        
        return True