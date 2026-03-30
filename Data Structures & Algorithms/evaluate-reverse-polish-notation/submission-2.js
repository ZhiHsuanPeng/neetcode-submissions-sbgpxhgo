class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (const op of tokens) {
            if (op === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (op === '-') {
                let a = stack.pop();
                let b = stack.pop()
                stack.push(b - a)
            } else if (op === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (op === '/') {
                let a = stack.pop();
                let b = stack.pop()
                stack.push(Math.trunc(b / a))
            } else {
                stack.push(Number(op))
            }
        }

        return stack[0]
    }
}
