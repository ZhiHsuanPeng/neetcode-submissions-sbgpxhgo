class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { 
        const set  = new Set(nums) 

        let max = 0; 
        for (const num of nums) {
            if (set.has(num-1)) {
                continue
            } 

            let len = 1
            let curr = num  
            while(set.has(curr + 1)) {
                curr ++ 
                len ++
            }    
            max = Math.max(max, len)
        }

        return max              
    }
}
