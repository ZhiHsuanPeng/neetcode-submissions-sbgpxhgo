class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       let q = [];
       let result = []
       let l = 0;

       for (let r = 0; r < nums.length; r ++) {
            let cur = nums[r]
            while(q.length > 0 && cur > nums[q[q.length - 1]]) {
                q.pop()
            }

            q.push(r)

            if (l > q[0]) {
                q.shift()
            }

            if ((r - l + 1) >= k) {
                result.push(nums[q[0]])
                l ++
            }
       }
       return result
    }
}
