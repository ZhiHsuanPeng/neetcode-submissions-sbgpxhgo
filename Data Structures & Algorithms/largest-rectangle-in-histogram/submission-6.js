class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = 0;
        for(let i = 0; i < heights.length; i ++) {
            let h = heights[i];
            let start = i;
            while(stack.length > 0 && h < stack[stack.length - 1][1]) {
                const [ index, height ] = stack.pop();
                max = Math.max( (i - index) * height, max );
                start = index
            }

            stack.push([start, h]);
        }

        for (const [ index, height ] of stack) {
            let totalLen = heights.length
            max = Math.max( (totalLen - index)* height, max)
        }

        return max
    }
}
