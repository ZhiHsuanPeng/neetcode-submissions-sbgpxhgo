class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { 

        let stack = []
        let res = 0 

        for (let i = 0; i < height.length; i ++) {
            let curr = height[i]
            while(stack.length > 0 && curr > height[stack[stack.length - 1]]) {
                const middle = stack.pop()  
                if (stack.length > 0) { 
                    const left = stack[stack.length - 1]  
                    const minHeight = Math.min(height[left], curr)
                    res += (i - left - 1) * ( minHeight - height[middle] )
                }
            }
            stack.push(i)
        } 

        return res
    }
}
