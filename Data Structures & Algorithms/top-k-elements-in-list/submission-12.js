class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let b = new Array(nums.length + 1).fill(0).map(() => []);

        let count = {};
        for (const c of nums) {
            count[c] = (count[c] || 0) + 1;
        }


        // count = { '5' (number itself): 2 (frequency of number) }
        for (const key in count) {
            let freq = count[key];
            b[freq].push(Number(key))
        }

        let res = [];
        for (let i = b.length - 1; i >= 0; i --) {
            let arr = b[i];
            if (arr.length === 0) continue;
            for (const num of arr) {
                res.push(num);
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}
