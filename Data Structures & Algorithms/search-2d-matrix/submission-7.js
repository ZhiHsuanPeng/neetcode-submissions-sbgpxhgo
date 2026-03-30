class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) { 
        let cols = matrix[0].length 
        let row = matrix.length 

        let l = 0 
        let r = cols * row - 1 

        while(l <= r) {
            let m = Math.floor(( r + l ) / 2) 
            let midVal = matrix[Math.floor(m / cols)][m % cols] 

            if (midVal === target) {
                return true
            } else if (midVal < target) {
                l = m + 1
            } else {
                r = m - 1
            }
        } 

        return false
    }
}
