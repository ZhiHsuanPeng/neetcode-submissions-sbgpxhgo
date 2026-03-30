class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) { 
        let n = nums.length 

        let res = 1
        let dp = new Array(n).fill(1) 

        for (let i = n - 1; i >= 0; i --) {
            for (let j = i + 1; j < n; j ++) {
                if (nums[i] < nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1)
                }
            } 

            res = Math.max(res, dp[i])
        } 

        return res
    }
}
