class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
       let res = [];
    backtrack(n, 0, 0, '');
    return res;

    function backtrack(n, open, close, curr) {
        // Base case: if open and close parentheses both equal to n, add the result
        if (open === n && close === n) {
            res.push(curr);
            return;
        }

        // Add open parentheses if it's less than n
        if (open < n) {
            backtrack(n, open + 1, close, curr + '(');
        }

        // Add close parentheses if it's less than open
        if (close < open) {
            backtrack(n, open, close + 1, curr + ')');
        }
    }
}
}
