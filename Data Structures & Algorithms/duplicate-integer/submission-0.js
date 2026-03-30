class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const obj = {};
        for (const num of nums) {
            if (obj[num]) {
                return true
            } else {
                obj[num] = 1
            }
        }
        return false
    }
}
