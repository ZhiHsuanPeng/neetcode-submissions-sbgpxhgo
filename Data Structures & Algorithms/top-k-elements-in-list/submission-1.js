class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = {};
        nums.forEach(num => {
            counter[num] = ( counter[num] || 0 ) + 1
        })

        let bucket = Array.from({length: nums.length + 1}, () => [])

        for (const key in counter) {
            bucket[counter[key]].push(Number(key))
        }
       
       let result = [];
       for (let i = bucket.length - 1; i >= 0; i --) {
            if (!bucket[i]) continue;

            for (const num of bucket[i]) {
                result.push(num)
                if (result.length === k) {
                    return result
                }
            }
       }
    }
}
