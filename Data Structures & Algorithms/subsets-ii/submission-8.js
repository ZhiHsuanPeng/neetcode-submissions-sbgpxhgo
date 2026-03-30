class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) { 
        nums.sort((a, b) => a - b)  
        const res = [] 
        const part = []
        this.dfs(0, nums, part, res) 
        return res
    } 

    dfs(start, nums, part, res) {
        res.push([...part])  

        for (let i = start; i < nums.length; i ++) { 
            if (i > start && nums[i] === nums[i - 1]) continue
            part.push(nums[i]) 
            this.dfs(i + 1, nums, part, res) 
            part.pop()
        } 
    }
}
