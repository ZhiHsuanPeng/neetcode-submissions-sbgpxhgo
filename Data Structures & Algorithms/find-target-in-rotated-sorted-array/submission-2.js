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
            let mid = l + Math.floor( (r - l) / 2)
            let midVal = nums[mid] 

            if (midVal > nums[r]) {
                l = mid + 1
            } else {
                r = mid
            }
        } 

        let pivot = l  

        l = 0 
        r = nums.length - 1 

        if (target <= nums[r] && nums[pivot] <= target) {
            return this.bSearch(nums, pivot, r, target)
        } else {
            return this.bSearch(nums, 0, pivot - 1, target)
        }
        
    } 

    bSearch(nums, l, r, target) {
        while(l <= r) { 
            let mid = Math.floor((r + l) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

         return -1
    }
}
