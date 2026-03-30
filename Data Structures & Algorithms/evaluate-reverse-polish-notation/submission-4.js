class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) { 
        let operands = new Set(["+", "*", "-", "/"]) 
        let stack = [] 

        for (const t of tokens) {
            if (!operands.has(t)) {
                stack.push(parseInt(t)) 
                continue
            } 
            let second = stack.pop()
            let first = stack.pop()
            if (t === '+') {
                stack.push(second + first)
            } else if (t === '-') {
                stack.push(first - second)
            } else if (t === '*') {
                stack.push(first * second)
            } else {
                stack.push(Math.trunc(first / second))
            }
        } 

        return stack.pop()
    }
}
