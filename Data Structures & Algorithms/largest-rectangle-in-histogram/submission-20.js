class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { 
        let stack = [] 
        let max = 0 

        for (let i = 0; i < heights.length; i ++) {
            let start = i 

            while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                const [index, height] = stack.pop() 
                max = Math.max((i - index) * height, max) 
                start = index
            } 

            stack.push([start, heights[i]])
        } 


        for (const pair of stack) {
            const [index, height] = pair 

            max = Math.max((heights.length - index) * height, max)
        } 

        return max
    }
}
