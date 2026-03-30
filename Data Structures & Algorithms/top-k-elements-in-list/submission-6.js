class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let frequency = new Array(nums.length + 1).fill(0).map(() => [])
        for (const num of nums) {
            count[num] = ( count[num] || 0 ) + 1
        }

        console.log(frequency)
        for (const key in count) {
            // count[key] is the frequency of the number (key)
            frequency[count[key]].push(Number(key))
        }

        let result = [];
        for (let i = frequency.length - 1; i >= 0; i --) {
            let bucket = frequency[i]
            if (!(bucket)) continue;
            for (const element of bucket) {
                result.push(element)
                if (result.length === k) return result
            }
        }
    }
}
