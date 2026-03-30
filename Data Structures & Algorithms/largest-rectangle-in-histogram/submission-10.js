class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { 
        let stack = [] 
        let max = 0
        for (let i = 0; i < heights.length ; i ++) { 
            let start = i
            while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                let [ index, height ] = stack.pop() 
                max = Math.max(max, height * (i - index)) 
                start = index
            } 

            stack.push([start, heights[i]])
        } 

        for (const [ index, height ] of stack) {
            max = Math.max(max, height * (heights.length - index))
        } 

        return max
    }
}
