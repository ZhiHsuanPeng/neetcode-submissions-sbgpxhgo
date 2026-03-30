class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) { 
        const map = new Map() 
        let prefixSum = 0  
        let result = 0
        map.set(0, 1) 

        for (let i = 0; i < nums.length; i ++) {
            prefixSum += nums[i] 

            if (map.has(prefixSum - k)) {
                result += map.get(prefixSum - k)
            } 

            map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
        } 

        return result
    }
}
