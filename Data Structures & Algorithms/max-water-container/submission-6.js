class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while(l < r) {
            let w = r - l;
            let h = Math.min(heights[l], heights[r]);
            let cur = w * h;
            max = Math.max(max, cur);

            if (heights[l] > heights[r]) {
                r --
            } else {
                l ++
            }
        }

        return max
    }
}
