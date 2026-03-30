class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0;

        for (let num of nums) {
            if (set.has(num - 1)) continue;

            let total = 0; 
            while (set.has(num)) {
                total ++
                num = num + 1
            }

            max = Math.max(max, total)
        }

        return max
    }
}
