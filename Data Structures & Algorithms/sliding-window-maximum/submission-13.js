class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) { 


        let dequeue = [] 
        let res = []
        for (let i = 0; i < nums.length; i ++) {
            
            if (dequeue[0] < i - k + 1) {
                dequeue.shift()
            }

            while(dequeue.length > 0 && nums[i] > nums[dequeue[dequeue.length - 1]]) {
                dequeue.pop()
            }

            dequeue.push(i) 

            if (i + 1 >= k) {
                res.push(nums[dequeue[0]])
            }
        } 

        return res
    }
}
