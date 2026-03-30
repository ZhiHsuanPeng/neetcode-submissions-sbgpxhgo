class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {  
        let result = []  
        let current = [] 
        let used = new Set()

        function dfs() {
            if (current.length === nums.length) {
                result.push([...current]) 
                return
            } 

            for (const num of nums) { 
                if (!used.has(num)) {
                    used.add(num) 
                    current.push(num) 
                    dfs() 
                    used.delete(num) 
                    current.pop()
                }
            }
        } 

        dfs() 

        return result
    }
}
