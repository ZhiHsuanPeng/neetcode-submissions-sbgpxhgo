class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        nums = nums.sort((a,b) => a-b)

        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while(l < r) {
                let cur = nums[i] + nums[l] + nums[r];
                if (cur < 0) {
                    l ++
                } else if (cur > 0) {
                    r --
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l ++;
                    while(l < r && nums[l] === nums[l - 1]) {
                        l ++
                    }
                }
            }
        }

        return res
    }
}
