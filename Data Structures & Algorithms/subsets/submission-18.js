class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const part = [] 
        const res = [] 
        this.dfs(0, nums, part, res) 
        return res
    } 

    dfs(start, nums, part, res) {
        res.push([...part]) 

        for (let i = start; i < nums.length; i ++) {
            part.push(nums[i]) 
            this.dfs(i + 1, nums, part, res) 
            part.pop()
        }
    }
}
