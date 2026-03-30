class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { 

        let l = 0 
        let r = nums.length - 1 

        while(l < r) {
            let mid = Math.floor((r + l) / 2) 
            let midVal = nums[mid] 

            if (midVal <= nums[nums.length - 1]) {
                r = mid
            } else {
                l = mid + 1
            }
        } 

        if (nums[0] <= target && target <= nums[r - 1]) {
            l = 0 
            r = r - 1
        } else {
            r = nums.length - 1
        } 

        while(l <= r) {
            let mid = Math.floor((r + l) / 2)  
            let midVal = nums[mid] 

            if (midVal === target) {
                return mid
            } else if (midVal < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
         } 

         return -1
    }
}
