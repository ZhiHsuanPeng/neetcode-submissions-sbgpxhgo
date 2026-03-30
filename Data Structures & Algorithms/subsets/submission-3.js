class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const res = [] 
        const cur = [] 
        this.rec(0, nums, cur, res) 
        return res
    } 

    rec(i, nums, cur, res) {
        if (i >= nums.length) {
            res.push([...cur]) 
            return
        } 

        cur.push(nums[i]) 
        this.rec(i + 1, nums, cur, res) 
        cur.pop() 
        this.rec(i + 1, nums, cur , res)
    }
}
