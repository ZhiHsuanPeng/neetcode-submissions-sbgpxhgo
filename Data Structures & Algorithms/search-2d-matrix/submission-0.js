class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let COL = matrix[0].length;
        let ROW = matrix.length;

        let top = 0;
        let bot = ROW - 1;

        while(top <= bot) {
            let m = Math.floor((top + bot) / 2);
            if (target > matrix[m][COL - 1]) {
                top = m + 1;
            } else if (target < matrix[m][0]) {
                bot = m - 1;
            } else {
                break
            }
        }

        if (!(top <= bot)) {
            return false;
        }

        let l = 0;
        let r = COL - 1;
        let col = Math.floor((top + bot) / 2);

        while(l <= r) {
            let m = Math.floor((l + r) / 2); 
            if (target > matrix[col][m]) {
                l = m + 1
            } else if (target < matrix[col][m]) {
                r = m - 1
            } else {
                return true
            }
        }

        return false
    }
}
