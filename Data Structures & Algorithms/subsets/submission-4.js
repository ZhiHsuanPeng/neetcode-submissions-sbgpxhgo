class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const res = [] 
        const cur = [] 
        this.dfs(0, nums, cur, res) 
        return res
    } 

    dfs(i, nums, cur, res) {
        if (i >= nums.length) {
            res.push([...cur]) 
            return
        } 

        cur.push(nums[i]) 
        this.dfs(i + 1, nums, cur, res) 
        cur.pop() 
        this.dfs(i + 1, nums, cur, res)
    }
}
