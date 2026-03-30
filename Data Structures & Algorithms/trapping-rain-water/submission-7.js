class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { 
        let stack = []  
        let res = 0

        for (let i = 0; i < height.length; i ++) { 
            let cur = height[i] 
            while(stack.length > 0 && cur > height[stack[stack.length - 1]]) {
                let mid = stack.pop() 

                if (stack.length > 0) {
                    let left = height[i] 
                    let right = height[stack[stack.length - 1]] 
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
