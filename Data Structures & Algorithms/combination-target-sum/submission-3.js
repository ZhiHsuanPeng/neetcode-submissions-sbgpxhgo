class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */ 
    combinationSum(nums, target) { 
        const result = [] 
        this.rec(nums, [], target, result, 0) 
        return result
    } 

    rec(nums, cur, target, res, level) {
        let total = cur.reduce((acc, val) => acc + val, 0) 

        if (total > target) {
            return
        } else if (total === target) {
            res.push(cur)
        }  

        for (let i = level; i < nums.length; i ++) {
            let num = nums[i] 
            this.rec(nums, [...cur, num], target, res, i)
        }
    }
}
