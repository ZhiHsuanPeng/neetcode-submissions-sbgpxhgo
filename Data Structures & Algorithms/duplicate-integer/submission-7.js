class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set(nums);
        return numSet.size !== nums.length
    }
}
