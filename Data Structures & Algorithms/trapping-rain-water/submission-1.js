class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r= height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0;

        while(l < r) {
            if (leftMax < rightMax) {
                l ++;
                leftMax = Math.max(height[l], leftMax)
                res += leftMax - height[l]
            } else {
                r --;
                rightMax = Math.max(height[r], rightMax)
                res += rightMax - height[r]
            }
        }
        return res
    }
}
