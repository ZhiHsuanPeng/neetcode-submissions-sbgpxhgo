class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { 
        let stack = [] 
        let res = 0
        for (let i = 0; i < height.length; i ++) {
            while(stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
                const mid = stack.pop() 

                if (stack.length > 0) {
                    let left = height[stack[stack.length - 1]] 
                    let right = height[i] 

                    let h = Math.min(left, right) - height[mid] 
                    let w = i - stack[stack.length - 1] - 1 
                    res += h * w
                }
            } 

           stack.push(i)
        } 

        return res
    }
}
