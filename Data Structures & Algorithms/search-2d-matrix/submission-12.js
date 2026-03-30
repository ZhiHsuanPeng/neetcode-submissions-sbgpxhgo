class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {  
        let cols = matrix[0].length 
        let rows = matrix.length
        let l = 0
        let r = cols * rows - 1 

        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2) 
            let midVal = matrix[Math.floor(mid / cols)][mid % cols] 

            if (midVal === target) {
                return true
            } else if (midVal < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } 

        return false
    }
}
