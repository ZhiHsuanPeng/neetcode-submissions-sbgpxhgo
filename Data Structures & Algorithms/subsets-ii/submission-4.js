class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) { 
        const res = [] 
        const cur = []  

        nums.sort()
        this.rec(0, nums, cur, res) 
        return res
    } 

    rec(start, nums, cur, res) {
        res.push([...cur]) 

        for (let i = start; i < nums.length; i ++) {
            if (i > start && nums[i] === nums[i - 1]) continue 
            cur.push(nums[i]) 
            this.rec(i + 1, nums, cur, res) 
            cur.pop()
        }
    }
}
