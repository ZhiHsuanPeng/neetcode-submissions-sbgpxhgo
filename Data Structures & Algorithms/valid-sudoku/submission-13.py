class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        r = defaultdict(set) 
        c = defaultdict(set) 
        g = defaultdict(set) 

        for i in range(rows): 
            for j in range(cols): 
                if board[i][j] == '.': 
                    continue 

                grid_key = (i // 3, j //3) 
                cur = board[i][j]
                if cur in r[i] or cur in c[j] or cur in g[grid_key]: 
                    return False  

                r[i].add(cur) 
                c[j].add(cur) 
                g[grid_key].add(cur) 

        return True
