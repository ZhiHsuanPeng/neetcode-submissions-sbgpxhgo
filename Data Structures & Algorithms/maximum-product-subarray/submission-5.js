class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) { 
        let minEnding = nums[0] 
        let maxEnding = nums[0]  
        let res = nums[0]

        for (let i = 1; i < nums.length; i ++) {
            let tempMax = Math.max(nums[i], nums[i] * minEnding, nums[i] * maxEnding) 
            minEnding = Math.min(nums[i], nums[i] * minEnding, nums[i] * maxEnding) 
            maxEnding = tempMax 

            res = Math.max(res, maxEnding)
        } 

        return res
    }
}
