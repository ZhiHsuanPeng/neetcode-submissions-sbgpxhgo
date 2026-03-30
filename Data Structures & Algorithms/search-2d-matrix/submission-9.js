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
            let mid = Math.floor( ( l + r ) / 2 ) 
            let midVal = matrix[ Math.floor( mid / cols ) ][ mid % cols ] 

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
