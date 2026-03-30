class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums = nums.sort((a, b) => a - b)
        // for edge cases where there is no possible result
        if (nums[0] > 0) return [];

        let result = [];
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l =  i + 1;
            let r = nums.length - 1;
            while( l < r ) {
                let sum = nums[i] + nums[l] + nums[r]
                if (sum > 0) {
                    r --
                } else if (sum < 0) {
                    l ++
                } else {
                    // sum = 0
                    result.push([nums[i], nums[l], nums[r]])
                    l ++
                    while(nums[l] === nums[l - 1]) {
                        l ++
                    }
                }
            }
        }

        return result
    }
}
