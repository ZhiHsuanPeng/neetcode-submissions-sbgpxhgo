class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) { 
        let prefixSum = 0  
        let count = new Map() 
        count.set(0, 1) 

        let res = 0

        for (const num of nums) {
            prefixSum += num 
            if (count.get(prefixSum - k)) {
                res += count.get(prefixSum - k)
            } 

            count.set(prefixSum, (count.get(prefixSum) || 0) + 1)
        } 

        return res
    }
}
