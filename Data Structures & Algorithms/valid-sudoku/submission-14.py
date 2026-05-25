class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set) 
        cols = defaultdict(set) 
        d = defaultdict(set) 

        for r in range(9): 
            for c in range(9): 
                cur = board[r][c] 

                if cur == '.':  
                    continue  

                key = (r // 3, c // 3) 

                if cur in rows[r] or cur in cols[c] or cur in d[key]: 
                    return False 

                rows[r].add(cur) 
                cols[c].add(cur) 
                d[key].add(cur) 

        return True