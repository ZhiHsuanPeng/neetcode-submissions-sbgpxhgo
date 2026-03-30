class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

          let map = {};

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        
        if (map[current] !== undefined) {
            return [map[current], i];
        }
        
        map[target - current] = i;
    }
    
    return [];
    }
}
