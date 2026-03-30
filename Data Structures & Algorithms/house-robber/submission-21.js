class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {  
        return this.rec(0, nums)
    } 

    rec(i, nums, memo = {}) { 
        if (i in memo) return memo[i]
        if (i >= nums.length) return 0 

        const res = Math.max(nums[i] + this.rec(i + 2, nums, memo), this.rec(i + 1, nums, memo))
        memo[i] = res 
        return res    
    }
}
