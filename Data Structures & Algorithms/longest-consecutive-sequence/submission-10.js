class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let max = 0
        for (const n of nums) {
            if (set.has(n - 1)) continue
            
            let count = 1
            let cur = n
            while(set.has(cur + 1)) {
                cur ++
                count ++
            }

            max = Math.max(count, max)
        }

        return max
    }
}
