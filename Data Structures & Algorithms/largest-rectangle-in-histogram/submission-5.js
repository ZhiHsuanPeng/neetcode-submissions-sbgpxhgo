class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = 0;

        for (let i = 0; i < heights.length; i ++) {
            let cur = heights[i];
            let start = i
            while(stack.length > 0 && stack[stack.length - 1][0] > cur) {
                const [h, index] = stack.pop();
                max = Math.max(max, h * (i - index))
                start = index
            }

            stack.push([cur, start])
        }

        for (const [h, index] of stack) {
            max = Math.max(max, h * (heights.length - index))
        }

        return max
    }
}
