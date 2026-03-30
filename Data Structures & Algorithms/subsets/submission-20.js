class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const res = [] 
        this.rec(0, nums, [], res) 
        return res
    } 


    rec(start, nums, part, res) {
        res.push([...part]) 

        for (let i = start; i < nums.length; i ++) {
            part.push(nums[i]) 
            this.rec(i + 1, nums, part, res) 
            part.pop()
        }
    }
}
