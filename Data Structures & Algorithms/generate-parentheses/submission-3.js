class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        const backtrack = (n, open, close, cur, res) => {
            if (n === open && n === close) {
                res.push(cur)
                return
            }

            if (n > open) {
                backtrack(n, open + 1, close, cur + '(', res)
            }

            if (open > close) {
                backtrack(n, open, close + 1, cur + ')', res)
            }
        }

        backtrack(n, 0, 0, '', res)
        return res;
    }
}
