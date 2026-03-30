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
            while(stack.length > 0 && height[stack[stack.length - 1]] < cur) { 
                const mid = stack.pop() 

                if (stack.length > 0) {   
                    const left = height[stack[stack.length - 1]]  
                    const h = Math.min( cur, left ) 
                    const w = i - stack[stack.length - 1] - 1 

                    res += (h - height[mid]) * w
                }
            }

            stack.push(i)
        } 

        return res
    }
}
