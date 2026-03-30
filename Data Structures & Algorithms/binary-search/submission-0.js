class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while( l <= r ) {
            let middle = Math.floor((l + r) / 2)
            let cur = nums[middle];

            if (target > cur) {
                l = middle + 1
            } else if (target < cur) {
                r = middle - 1
            } else {
                return middle
            }
        }

        return -1
    }
}
