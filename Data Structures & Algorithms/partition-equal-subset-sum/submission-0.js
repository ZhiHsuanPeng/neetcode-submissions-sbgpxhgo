class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) { 
        let sum = nums.reduce((acc, cur) => acc + cur, 0) 
        if (sum % 2 !== 0) return false 

        return this.dfs(0, nums, 0, sum / 2)
    } 

    dfs(start, nums, cur, target) { 
        if (cur > target) return false
        if (cur === target) return true

        for (let i = start; i < nums.length; i ++) {
            if (this.dfs(i + 1, nums, cur + nums[i], target)) return true
        } 

        return false
    }
}
