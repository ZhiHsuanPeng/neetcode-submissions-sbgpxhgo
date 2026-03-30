class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 
        let prev1 = 0 
        let prev2 = 0 

        for (let i = 0; i < nums.length; i ++) {
            let cur = Math.max(nums[i] + prev2, prev1) 
            prev2 = prev1 
            prev1 = cur
        } 

        return prev1
    }
}
