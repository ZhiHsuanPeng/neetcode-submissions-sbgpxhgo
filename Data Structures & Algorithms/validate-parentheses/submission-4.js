class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) { 
        let right = new Set(['}', ']', ')'])   
        let leftMap = {
            '[': ']', 
            '{': '}', 
            '(': ')'
        }
        let stack = []
        for (const p of s) {
            if (!right.has(p)) {
                stack.push(p)
            } else {
                let left = stack.pop() 
                if (leftMap[left] !== p) {
                    return false
                }
            }
        } 

        return stack.length === 0
    }
}
