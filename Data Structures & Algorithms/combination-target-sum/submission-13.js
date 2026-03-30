class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {  
        let res = []
        function dfs(j, cur, curSum) {
            if (curSum === target) {
                res.push([...cur]) 
                return
            }  

            if (curSum > target) {
                return
            }

            for (let i = j; i < nums.length; i ++) {       
                cur.push(nums[i]) 
                dfs(i, cur, curSum + nums[i]) 
                cur.pop()
            }
        } 

        const cur = [] 
        dfs(0, cur, 0) 
        return res
    }
}
