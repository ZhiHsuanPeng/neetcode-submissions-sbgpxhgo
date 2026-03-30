class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const close = {
            ']': '[',
            '}': '{',
            ')': '('
        }
        
        const stack = [];

        for (const b of s) {
            if (close[b]) {
                let open = stack.pop();
                if (open !== close[b]) {
                    return false
                }
            } else {
                stack.push(b)
            }
        }

        return stack.length === 0
    }
}
