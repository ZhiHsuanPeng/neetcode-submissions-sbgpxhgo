class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {  
        if (nums.length === 1) return nums[0]
        let first = nums.slice(1) 
        let second = nums.slice(0, -1) 

        return Math.max(this.helper(first), this.helper(second))
    } 


    helper(nums) {
        let prev1 = 0 
        let prev2 = 0 

        for (let i = 0;i < nums.length; i ++) {
            const cur = Math.max(nums[i] + prev2, prev1) 
            prev2 = prev1 
            prev1 = cur 
        } 

        return prev1
    }
}
