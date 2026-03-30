class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) { 

        let targetRow = null

        for (let i = 0; i < matrix.length; i ++) {
            let row = matrix[i] 
            let start = row[0] 
            let end = row[row.length - 1] 
            if (start <= target && target <= end) {
                targetRow = matrix[i]
                break
            } 
        }  

        if (targetRow === null) {
            return false
        }

        let l = 0 
        let r = targetRow.length - 1 

        while(l <= r) {
            let middle = Math.floor( ( l + r ) / 2 )
            let value = targetRow[middle]
            if (value === target) {
                return true
            } else if (value > target) {
                r = middle - 1
            } else {
                l = middle + 1
            }
        }

        return false
    }
}
