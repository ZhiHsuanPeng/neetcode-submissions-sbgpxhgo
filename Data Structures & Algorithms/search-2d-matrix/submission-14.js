class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {  
        let rows = matrix.length 
        let cols = matrix[0].length

        let l = 0 
        let r = rows * cols - 1 

        while(l <= r) {
            let mid = Math.floor((r + l) / 2) 
            let number = matrix[Math.floor(mid / cols)][mid % cols] 

            if (number > target) {
                r = mid - 1
            } else if (number < target) {
                l = mid + 1
            } else {
                return true
            }
        } 

        return false
    }
}
