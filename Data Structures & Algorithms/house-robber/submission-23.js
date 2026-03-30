class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 
        let prev1 = 0 
        let prev2 = 0 

        for (let i = 0; i < nums.length; i ++) {
            let cur = Math.max(nums[i] + prev1, prev2) 
            let temp = prev2 
            prev2 = cur 
            prev1 = temp
        } 

        return prev2
    }
}
