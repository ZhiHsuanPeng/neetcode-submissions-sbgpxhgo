class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) { 
        const res = []
        function dfs(start, cur) {


                res.push([...cur]) 


            for (let i = start; i < nums.length; i ++) {
                cur.push(nums[i]) 
                dfs(i + 1, cur) 
                cur.pop()
            }      
        } 

        dfs(0, []) 

        return res
    }
}
