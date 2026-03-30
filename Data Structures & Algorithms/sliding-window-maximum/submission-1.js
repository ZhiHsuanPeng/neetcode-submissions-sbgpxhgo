class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let stack = [];
        let result = [];
        for (let r = 0; r < nums.length; r ++) {
            console.log(stack)
            while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[r]) {
                stack.pop();
            }
            stack.push(r);

            if (l > stack[0]) {
                stack.shift()
            }

            if (r - l + 1 >= k) {
                result.push(nums[stack[0]]);
                l ++;
            }
        }

        return result
    }
}
