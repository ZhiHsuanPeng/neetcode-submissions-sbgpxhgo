class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) { 

        let deque = []
        let res = [] 
        for (let i = 0; i < nums.length ; i++) {
            let cur = nums[i]  

            if (deque.length > 0 && (i - k + 1) > deque[0]) {
                deque.shift()
            }

            while(deque.length > 0 && nums[deque[deque.length - 1]] < cur) {
                deque.pop() 
            } 

            deque.push(i) 

            if (i >= k - 1) {
                res.push(nums[deque[0]])
            }
        }

        return res
    }
}
