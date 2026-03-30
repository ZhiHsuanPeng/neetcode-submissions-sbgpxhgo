class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const result = [];

        const backTrack = (n, open, close, cur, result) => {
            if (n === open && open === close) {
                result.push(cur)
                return;
            }

            if (n > open) {
                backTrack(n, open + 1, close, cur + '(', result)
            }

            if (open > close) {
                backTrack(n, open, close + 1, cur + ')', result)
            }
        }

        backTrack(n, 0, 0, '', result)

        return result
    }
}
