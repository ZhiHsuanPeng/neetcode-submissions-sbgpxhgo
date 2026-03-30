class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) { 

        let l = 0 
        let r = nums.length - 1 

        while(l < r) {
            let mid = Math.floor((r + l) / 2) 

            if (nums[mid] <= nums[nums.length - 1]) {
                r = mid
            } else {
                l = mid + 1
            } 
        } 

        return nums[l]
    }
}
