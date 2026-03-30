class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const counter = {};
      const freq = Array.from({length: nums.length + 1}, () => []);

    // get frequency of each num
      for (const num of nums) {
        counter[num] = ( counter[num] || 0 ) + 1;
      }

    // put counter into freq
      for (const key in counter) {
        freq[counter[key]].push(parseInt(key))
      }

    // loop through freq 
    let ans = [];
    for (let i = freq.length - 1; i >= 0; i --) {
        if (freq[i]) {
            for (const num of freq[i]) {
                ans.push(num)
                if (ans.length === k) {
                    return ans
                }
            }
        }
    }

    return -1
    }
}
