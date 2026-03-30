class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {  
     let res = 0
     let stack = [] 
     for (let i = 0; i < height.length; i ++) {
        while(stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let mid = height[stack.pop()] 

            if (stack.length > 0) {
                let left = height[i] 
                let right = height[stack[stack.length - 1]] 
                let h = Math.min(left, right) - mid
                let w = i - stack[stack.length - 1] - 1 
                res += h * w
            }
        } 

        stack.push(i)
     }  
    return res
} 

}

  