class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) { 
       nums.sort((a, b) => a - b) 
       console.log(nums)
        let res = [] 

        for (let i = 0; i < nums.length; i ++) {
            let cur = nums[i] 
            if (i > 0 && nums[i] === nums[i - 1]) continue 

            let l = i + 1 
            let r = nums.length - 1 

            while(l < r) {
                let sum = cur + nums[l] + nums[r] 

                if (sum === 0) {
                    res.push([cur, nums[l], nums[r]]) 
                    while(nums[l] === nums[l + 1]) {
                        l ++
                    }  
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
