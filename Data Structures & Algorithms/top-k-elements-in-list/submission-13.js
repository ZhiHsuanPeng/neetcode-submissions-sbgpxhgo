class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Array(nums.length + 1).fill(0).map(() => [])
        const counter = {}
        const result = []
        for (let i = 0; i < nums.length; i ++) {
            const cur = nums[i]
            counter[cur] = ( counter[cur] || 0 ) + 1
        }

        for (const key in counter) {
            let frequency = counter[key]
            freq[frequency].push(Number(key))
        }

        for (let i = freq.length - 1; i > 0; i --) {
            for (let number of freq[i]) {
                result.push(number)
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}
