class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for (let i = 0; i < heights.length; i ++) {
            let l = i;
            let r = heights.length - 1;
            while(l < r) {
                let h = Math.min(heights[l], heights[r])
                let w = r - l
                console.log(h)
                max = Math.max(max, h * w)
                r --
            }
        }
        return max
    }
}
