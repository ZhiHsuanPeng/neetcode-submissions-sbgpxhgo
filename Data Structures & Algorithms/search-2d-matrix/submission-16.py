class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix) 
        cols = len(matrix[0])
        
        l = 0 
        r = rows * cols - 1 

        while l <= r: 
            mid = (l + r) // 2 

            val = matrix[mid // cols][mid % cols]
            if val == target: 
                return True 
            elif val < target: 
                l = mid + 1 
            else: 
                r = mid - 1 

        return False