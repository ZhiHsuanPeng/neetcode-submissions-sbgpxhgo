class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {  
        let result = [] 

        function dfs(cur) {
            if (cur.size === nums.length) {
                result.push(Array.from(cur)) 
                return
            } 

            for (const num of nums) { 
                if (cur.has(num)) {
                    continue
                }
                cur.add(num) 
                dfs(cur) 
                cur.delete(num)
            }
        } 

        dfs(new Set()) 

        return result
    }
}
