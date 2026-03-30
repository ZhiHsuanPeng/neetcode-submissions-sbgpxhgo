class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0; 
        let r = heights.length - 1;
        let maxArea = 0;
        while(l < r) {
            let curArea = (r - l) * Math.min(heights[l], heights[r])
            maxArea = Math.max(maxArea, curArea)

            if (heights[l] > heights[r]) {
                r --
            } else {
                l ++
            }
        }

        return maxArea
    }
}
