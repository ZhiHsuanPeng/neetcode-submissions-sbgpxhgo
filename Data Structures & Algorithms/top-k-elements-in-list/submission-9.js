class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // { '1': 1, '2': 2 }
        let count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        let bucket = new Array(nums.length + 1).fill(0).map(() => [])
        for (const key in count) {
            const freq = count[key]
            bucket[freq].push(Number(key))
        }
        console.log(bucket)
        let result = [];
        for (let i = bucket.length - 1; i >= 0; i --) {
            if (bucket[i].length === 0) continue
            for (const num of bucket[i]) {
                result.push(num)
                if (result.length === k) {
                      return result
                }
            }
        }  
    }
}
