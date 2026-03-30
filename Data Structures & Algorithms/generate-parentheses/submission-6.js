class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        let result = []

        this.backtracking(n, 0, 0, "", result) 

        return result
    }

    backtracking(n, open, close, current, result) {
        if (n === open && n === close) {
            result.push(current)
            return 
        } 

        if (n > open) {
            this.backtracking(n, open + 1, close, current + '(', result)
        } 

        if (open > close) {
            this.backtracking(n, open, close + 1, current + ')', result)
        }
    }
}
