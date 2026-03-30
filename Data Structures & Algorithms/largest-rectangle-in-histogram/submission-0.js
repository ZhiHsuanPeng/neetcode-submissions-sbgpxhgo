class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxH = 0
        for (let i = 0; i < heights.length; i ++) {
            let start = i;
            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                let [index, h] = stack.pop();
                maxH = Math.max(maxH, (i - index) * h)
                start = index
            }

            stack.push([start, heights[i]])
        }

        for (const [index, h] of stack) {
            maxH = Math.max(maxH, (heights.length - index) * h)
        }

        return maxH
    }
}
