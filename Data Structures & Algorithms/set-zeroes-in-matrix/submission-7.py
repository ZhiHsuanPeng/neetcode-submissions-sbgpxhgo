class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        rows = len(matrix) 
        cols = len(matrix[0]) 

        x = [1] * cols
        y = [1] * rows 

        for r in range(rows): 
            for c in range(cols): 
                if matrix[r][c] == 0: 
                    y[r] = 0 
                    x[c] = 0 

        for r in range(rows): 
            for c in range(cols): 
                if x[c] == 0 or y[r] == 0: 
                    matrix[r][c] = 0