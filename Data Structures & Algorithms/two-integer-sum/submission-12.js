class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i ++) {
            let cur = nums[i];
            let diff = target - cur;

            if (map.has(diff)) {
                return [map.get(diff), i]
            } else {
                map.set(cur, i)
            }
        }
    }
}
