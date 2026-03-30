class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROW = matrix.length;
        let COL = matrix[0].length;

        let top = 0;
        let bot = matrix.length - 1;

        while(top <= bot) {
            let m = Math.floor((top + bot) / 2);

            if (matrix[m][0] > target) {
                bot = m - 1
            } else if (matrix[m][COL - 1] < target) {
                top = m + 1
            } else {
                break
            }
        }

        if (!(top <= bot)) return false

        let row = matrix[Math.floor((top + bot) / 2)];
        let l = 0;
        let r = COL - 1;

        while(l <= r) {
            let m = Math.floor((l + r) / 2);

            if (row[m] > target) {
                r = m - 1
            } else if (row[m] < target) {
                l = m + 1
            } else {
                return true
            }
        }

        return false
    }
}
