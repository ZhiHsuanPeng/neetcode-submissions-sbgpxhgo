class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) { 
        const cur = [] 
        const res = [] 
        this.dfs(nums, target, cur, 0, res) 

        return res
    } 

    dfs(nums, target, cur, i, res) {
        if (target === 0) {
            res.push([...cur]);
        } else if (target < 0 || i >= nums.length) {
            return;
        } else {
             cur.push(nums[i]) 
        this.dfs(nums, target - nums[i], cur, i, res) 
        cur.pop()  
        this.dfs(nums, target, cur, i + 1, res)
        }

       

    }
}
