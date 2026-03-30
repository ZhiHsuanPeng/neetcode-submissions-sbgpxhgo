class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        for (let i = 0; i < nums.length; i ++) {
            const num = nums[i]
            const complement = target - num;
            if (obj[num] != undefined) {
                return [obj[num], i]
            } else {
                obj[complement] = i
            }
        }
        return [-1, -1]
    }
}
