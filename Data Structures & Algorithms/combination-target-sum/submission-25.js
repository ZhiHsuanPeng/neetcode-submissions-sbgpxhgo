class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) { 
        const res = [] 
        const part = [] 
        this.dfs(0, nums, target, part ,res) 
        return res
    } 

    dfs(start, nums, target, part, res) {
        if (target === 0) {
            res.push([...part]) 
            return
        }  

        if (target < 0) {
            return
        }

        for (let i = start; i < nums.length; i ++) {
            part.push(nums[i]) 
            target -= nums[i] 
            this.dfs(i, nums, target, part, res) 
            part.pop() 
            target += nums[i] 
        }
    }
}
