class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let number = new Set(nums);
        let max = 0;
        for (let i = 0; i < nums.length; i ++) {
            if (number.has(nums[i] - 1)) {
                continue;
            } 
            let length = 1
            while(number.has(nums[i] + length)) {
                length ++   
            }
            max = Math.max(max, length);
        }
        return max;
    }
}
