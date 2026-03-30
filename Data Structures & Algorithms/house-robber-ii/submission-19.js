class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 
        if (nums.length === 1) return nums[0]
        return Math.max(this.rec(0, nums, true, {}), this.rec(1, nums, false, {}))
    } 

    rec(i, nums, flag, memo) {  
        if (i in memo) return memo[i]
        if (i >= nums.length || (flag && i === nums.length - 1)) {
            return 0
        } 
        memo[i] = Math.max(
            nums[i] + this.rec(i + 2, nums, flag, memo),  
            this.rec(i + 1, nums, flag, memo))
        return memo[i]
    }
}
