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
            let curIndex = i
            while(stack.length > 0 && stack[stack.length - 1][1] > cur) {
                let [ index, height ] = stack.pop()
                max = Math.max(max, height * (i - index))
                curIndex = index
            }
            stack.push([ curIndex, cur ])
        }

        for (let [index, height] of stack) {
            max = Math.max( (heights.length - index) * height, max)
        }

        return max
    }
}
