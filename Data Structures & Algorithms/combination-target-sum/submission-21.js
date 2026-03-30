class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {  
        const res = [] 
        nums.sort() 

        function dfs(start, total, cur) {
            if (total === target) {
                res.push([...cur]) 
                return
            } 

            for (let i = start; i < nums.length; i ++) { 
                if (total + nums[i] > target) return
                cur.push(nums[i]) 
                dfs(i, total + nums[i], cur) 
                cur.pop()
            }
        } 

        dfs(0, 0, []) 

        return res
    }
}
