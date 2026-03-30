class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {  
        const col = matrix[0].length  
        const row = matrix.length
        let l = 0 
        let r = col * row - 1 

        while(l <= r) {
            let mid = Math.floor((r + l) / 2) 
            let num = matrix[Math.floor(mid / col)][mid % col] 

            if (num === target) return true 
            if (num < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } 

        return false
    }
}
