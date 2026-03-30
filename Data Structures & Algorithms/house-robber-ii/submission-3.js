class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 
        if (nums.length === 1) return nums[0]
        
        return Math.max(this.rec(0, nums, true), this.rec(1, nums, false))
    } 

    rec(i, nums, flag, memo = {}) { 
        const key = `${i},${flag ? 1 : 0}` 
        if (key in memo) return memo[key]
        if (i >= nums.length || (flag && i === nums.length - 1)) return 0; 

        const res = Math.max(nums[i] + this.rec(i + 2, nums, flag, memo),  
        this.rec(i + 1, nums, flag, memo)) 

        memo[key] = res 
        return memo[key]
    }
}
