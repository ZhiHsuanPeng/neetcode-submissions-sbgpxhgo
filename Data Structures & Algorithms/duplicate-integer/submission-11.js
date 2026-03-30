class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) { 
        const set = new Set(nums) 
        if (nums.length !== Array.from(set).length) {
            return true
        } 
        return false
    }
}
