class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i ++) {
            let cur = heights[i]
            let start = i

            while(stack.length > 0 && stack[stack.length - 1][0] > cur) {
                let [height, index] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index
            }

            stack.push([cur, start])
        }

        for (const [height, index] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index))
        }

        return maxArea
    }
}
