class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let stack = [];
        let res = [];

        let l = 0;
        for (let r = 0; r < nums.length; r ++) {
            while(stack.length > 0 && nums[r] > nums[stack[stack.length - 1]]) {
                stack.pop();
            }

            stack.push(r);

            if (l > stack[0]) {
                stack.shift();
            }

            if ((r - l + 1) >= k) {
                res.push(nums[stack[0]]);
                l++
            }
        }

        return res
    }
}
