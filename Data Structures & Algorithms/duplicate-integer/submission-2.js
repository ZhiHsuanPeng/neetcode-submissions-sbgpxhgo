class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();   
        for (const num of nums) {
            if (!(set.has(num))) {
                set.add(num)
            } else {
                return true
            }
        }

        return false
    }
}
