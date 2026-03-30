class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const result = [] 
        this.rec(0, nums, [], result) 
        return result
    } 

    rec(i, nums, cur, res) {
        if (i === nums.length) {
            res.push(cur) 
            return
        } 


        let num = nums[i] 
        this.rec(i + 1, nums, [...cur, num], res) 
        this.rec(i + 1, nums, [...cur], res)
    }
}
