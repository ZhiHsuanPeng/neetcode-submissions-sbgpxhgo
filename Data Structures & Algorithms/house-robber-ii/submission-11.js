class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {  
        if (nums.length === 1) return nums[0]
        const dfs = (i, flag, memo = {}) => { 
            if (i in memo) return memo[i]
            if (i >= nums.length || (flag && i === nums.length - 1)) return 0 

            const res =Math.max(nums[i] + dfs(i + 2, flag, memo), dfs(i + 1, flag, memo)) 
            memo[i] = res 
            return res
        } 

        return Math.max(dfs(0, true), dfs(1, false))
    }
}
