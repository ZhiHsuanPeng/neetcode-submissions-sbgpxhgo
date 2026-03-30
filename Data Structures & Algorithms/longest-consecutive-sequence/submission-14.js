class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { 

        let set = new Set(nums)  
        let max = 0
         
        for (const num of set) {
            if (set.has(num - 1)) continue 

            let count = 1  
            let i = 1
            while(set.has(num + i)) {
                count ++  
                i ++
            } 
            max = Math.max(count, max)
        } 
        return max

    }
}
