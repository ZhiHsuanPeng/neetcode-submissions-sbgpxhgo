class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        const b = (n, open, close, cur, res) => {
            if (n === open && open === close) {
                res.push(cur)
                return
            }

            if (n > open) {
                b(n, open + 1, close, cur + '(', res)
            }

            if (open > close) {
                b(n, open, close + 1, cur + ')', res)
            }

        }
        b(n, 0, 0, '', res)
        return res
    }
}
