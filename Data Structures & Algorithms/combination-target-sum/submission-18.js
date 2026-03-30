class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) { 
        const res = [] 
        const cur = [] 

        this.dfs(0, nums, target, 0, cur, res) 

        return res
    } 

    dfs(i, nums, target, total, cur, res) { 
        if (total === target) {
            res.push([...cur]) 
            return
        }  

        if (i >= nums.length || total > target) {
            return
        }

        cur.push(nums[i]) 
        this.dfs(i, nums, target, total + nums[i], cur, res) 
        cur.pop() 
        this.dfs(i + 1, nums, target, total, cur, res)
    }
}
