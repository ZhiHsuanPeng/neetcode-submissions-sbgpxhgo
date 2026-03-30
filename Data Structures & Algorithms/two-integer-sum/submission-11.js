class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();

        for (let i = 0; i < nums.length; i ++) {
            let cur = nums[i];
            if (numMap.has(cur)) {
                return [numMap.get(cur), i]
            } else {
                let diff = target - cur;

                numMap.set(diff, i)
            }
        }

        return []
    }
}
