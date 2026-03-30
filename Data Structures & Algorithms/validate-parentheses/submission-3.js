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

        let stack = []
        for (const c of s) {
            if (close[c]) {
                const bracket = stack.pop() 
                if (bracket !== close[c]) {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0 ? true : false
    }
}
