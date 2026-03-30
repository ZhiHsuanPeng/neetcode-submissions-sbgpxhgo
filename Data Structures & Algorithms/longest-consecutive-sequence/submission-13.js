class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { 
        const set  = new Set(nums) 

        let max = 0; 
        for (const num of nums) {
        if (!set.has(num-1)) {
            let length = 1 

            while (set.has(num + length)) {
                length ++
            } 

            max = Math.max(length, max)
        }   

                  
    } 
    return max    
}
}
