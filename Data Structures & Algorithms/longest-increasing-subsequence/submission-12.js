class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) { 
        let dp = [nums[0]] 
        let res = 1
        for (let i = 1; i < nums.length; i ++) {
            if (nums[i] > dp[dp.length - 1]) {
                dp.push(nums[i]) 
                res ++ 
                continue;
            } 

            let l = 0 
            let r = dp.length - 1 

            while(l < r) {
                let mid = Math.floor((r + l) / 2) 

                if (dp[mid] < nums[i]) {
                    l = mid + 1
                } else {
                    r = mid
                }
            } 

            dp[l] = nums[i]
        } 

        return res
    }
}
