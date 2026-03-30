class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0 
        let stack = []
        let result = []
        for (let r = 0; r < nums.length; r ++) {
            let cur = nums[r]
            while(cur > nums[stack[stack.length - 1]]) {
                stack.pop() 
            }
            stack.push(r) 

            if (stack[0] < l) {
                stack.shift()
            }

            if ((r - l + 1) === k) {
                result.push(nums[stack[0]])
                l ++
            }
        }

        return result
    }
}
