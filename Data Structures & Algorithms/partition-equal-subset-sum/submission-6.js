class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) { 
        const sum = nums.reduce((acc, cur) => acc + cur, 0) 

        if (sum % 2 !== 0) return false 

        return this.dfs(0, 0, nums, sum / 2)
    } 

    dfs(i, cur, nums, target) { 
        if (cur === target) return true 
        if (cur > target || i === nums.length) return false 

        const res = this.dfs(i + 1, cur + nums[i], nums, target) || 
                    this.dfs(i + 1, cur, nums, target) 

        return res
    }
}
