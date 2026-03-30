class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) { 
        let curSum = 0 
        let start = 0 
        let minLen = nums.length + 1 

        let l = 0; 
        for (let r = 0; r < nums.length; r ++) {
            let cur = nums[r] 
            curSum += cur 

            while(curSum >= target) {
                if ((r - l + 1) < minLen) {
                    start = l 
                    minLen = r - l + 1
                } 

                let deleted = nums[l] 
                curSum -= deleted 
                l ++           
            }
        } 

        return minLen === nums.length + 1 ? 0 : minLen
    }
}
