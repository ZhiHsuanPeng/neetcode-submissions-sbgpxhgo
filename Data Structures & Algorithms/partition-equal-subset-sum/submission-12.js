class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) { 
        const sum = nums.reduce((acc, cur) => acc + cur, 0) 

        if (sum % 2 !== 0) return false 

        return this.dfs(0, 0, nums, sum / 2, {})
    } 

    dfs(start, cur, nums, target, memo) { 
        const key = `${start}_${cur}` 
        if (key in memo) return memo[key]
        if (cur === target) return true 
        if (cur > target) return false 

        for (let i = start; i < nums.length; i ++) {
            const res = this.dfs(i + 1, cur + nums[i], nums, target, memo)  
            if (res) {
                memo[key] = true 
                return true
            }
        }

        memo[key] = false
        return false
    }
}
