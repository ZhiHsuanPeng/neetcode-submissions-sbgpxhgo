class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) { 

        let result = [] 

        function dfs(j, cur, curSum) {
            if (j >= nums.length || curSum > target) {
                return
            } 

            if (curSum === target) {
                result.push([...cur]) 
                return
            } 

            for (let i = j; i < nums.length; i ++) {
                cur.push(nums[i]) 
                dfs(i, cur, curSum + nums[i]) 
                cur.pop()
            }
        } 

        dfs(0, [], 0) 

        return result
    }
}
