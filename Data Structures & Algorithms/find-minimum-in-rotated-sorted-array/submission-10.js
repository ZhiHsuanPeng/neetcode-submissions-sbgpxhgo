class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) { 

        let l = 0 
        let r = nums.length - 1 

        while(l < r) {
            let mid = l + Math.floor((r - l) / 2) 
            let midVal = nums[mid] 

            if (midVal <= nums[r]) {
                r = mid
            } else {
                l = mid + 1
            }
        } 

        return nums[r]
    }
}
