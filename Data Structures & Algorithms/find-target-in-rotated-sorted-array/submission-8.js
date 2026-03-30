class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { 

        let l = 0 
        let r = nums.length - 1 

        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2) 
            let midVal = nums[mid]  

            if (midVal === target) return mid

            if (midVal <= nums[r]) {
                if (midVal < target && target <= nums[r]) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            } else {
                if (nums[l] <= target && target < midVal) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        } 

        return -1
    }
}
