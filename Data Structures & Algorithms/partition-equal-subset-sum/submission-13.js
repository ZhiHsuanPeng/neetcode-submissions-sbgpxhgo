class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) { 
        let target = nums.reduce((acc, cur) => acc + cur) 
        if (target % 2 !== 0) return false 
        target = target / 2 

        let dp = new Array(target + 1).fill(false) 

        dp[0] = true 

        for (const num of nums) {
            for (let i = dp.length - 1; i >= num; i --) {
                dp[i] = dp[i] || dp[i - num]
            }
        } 

        return dp[target]
    }
}
