class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) { 

        const dequeue = []  
        const result = []

        for (let i = 0; i < nums.length; i ++) { 
            if ((i - k + 1) > dequeue[0]) {
                dequeue.shift()
            }

            while(dequeue.length > 0 && nums[i] > nums[dequeue[dequeue.length - 1]]) {
                dequeue.pop() 
            } 

            dequeue.push(i) 

            if (i >= k - 1) {
                result.push(nums[dequeue[0]])
            }
        } 

        return result
    }
}
