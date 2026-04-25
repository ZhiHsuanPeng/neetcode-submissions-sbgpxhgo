class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        rows = len(matrix) 
        cols = len(matrix[0]) 

        self.pre = [ [ 0 for _ in range(cols) ] for _ in range(rows) ] 

        for r in range(rows): 
            for c in range(cols):
                above = self.pre[r - 1][c] if r - 1 >= 0 else 0 
                left = self.pre[r][c - 1] if c - 1 >= 0 else 0 
                diag = self.pre[r - 1][c - 1] if r - 1 >= 0 and c - 1 >= 0 else 0 

                self.pre[r][c] = matrix[r][c] + above + left - diag

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
            above = self.pre[row1 - 1][col2] if row1 - 1 >= 0 else 0 
            left = self.pre[row2][col1 - 1] if col1 - 1 >= 0 else 0 
            diag = self.pre[row1 - 1][col1 - 1] if row1 - 1 >= 0 and col1 - 1 >= 0 else 0 

            return self.pre[row2][col2] - above - left + diag


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)