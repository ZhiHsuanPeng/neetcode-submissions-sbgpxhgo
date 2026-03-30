class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { 
        let stack = []  
        let max = 0 
         
        for (let i = 0; i < heights.length; i ++) {
            let cur = heights[i] 
            let start = i 

            while(stack.length > 0 && stack[stack.length - 1][1] > cur) {
                const [ index, height ] = stack.pop() 
                max = Math.max( (i - index) * height, max ) 
                start = index
            } 

            stack.push([start, cur])
        } 

        for (const pair of stack) {
            const index = pair[0] 
            const height = pair[1] 

            max = Math.max(max, (heights.length - index) * height)
        }

        return max
    }
}
