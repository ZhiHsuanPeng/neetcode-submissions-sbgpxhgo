class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) { 
        nums.sort((a,b) => a - b) 
        let res = []
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > 0) break; 
            if (i > 0 && nums[i] === nums[i - 1]) continue

            let cur = nums[i]
            let l = i + 1 
            let r = nums.length - 1 
           
            
            while(l < r) { 
                let sum = cur + nums[l] + nums[r] 
                if (sum === 0) {
                res.push([cur, nums[l], nums[r]]) 
                while(l < r && nums[l + 1] === nums[l]) l ++ 
                while(l < r && nums[r - 1] === nums[r]) r --
                l ++ 
                r --           
            } else if (sum < 0) {
                l ++ 
            } else {
                r --
            }
            }
            
        } 

        return res
    }
}
