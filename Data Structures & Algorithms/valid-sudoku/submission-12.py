class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = len(board) 
        cols = len(board[0]) 

        r = defaultdict(set) 
        c = defaultdict(set) 
        g = defaultdict(set) 

        for i in range(rows): 
            for j in range(cols):   
                cur = board[i][j]
                if cur == '.': 
                    continue  

                g_key = (i // 3, j // 3)
                
                if cur in r[i] or cur in c[j] or cur in g[g_key]: 
                    return False 

                r[i].add(cur) 
                c[j].add(cur) 
                g[g_key].add(cur) 

        return True