class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while(l < r) {
            let w = r - l;
            let h = Math.min(heights[l], heights[r]);
            res = Math.max(res, w * h);

            if (heights[l] < heights[r]) {
                l ++
            } else {
                r --
            }
        }
        return res
    }
}
