class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { 

        let stack = []
        let max = 0

        for (let i = 0; i < heights.length; i ++) {
             let curHeight = heights[i]  
             let start = i

             while(stack.length > 0 && stack[stack.length - 1][1] > curHeight) {
                const [ index, height ] = stack.pop() 
                max = Math.max(max, (i - index) * height) 
                start = index
             } 

             stack.push([start, curHeight])
        } 


        for (const [ index, height ] of stack) {
            max = Math.max(max ,(heights.length - index) * height)
        } 

        return max
    }
}
