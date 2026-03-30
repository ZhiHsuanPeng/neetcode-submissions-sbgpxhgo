class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let cBracket = {
            '}': '{',
            ']': '[',
            ')': '('
        }

        for (const b of s) {
            if (b in cBracket) {
                let oBracket = stack.pop()
                if ( cBracket[b] === oBracket ) {
                    continue
                } else {
                    return false
                }
            } else {
                stack.push(b)
            }
        }

        return stack.length === 0
    }
}
