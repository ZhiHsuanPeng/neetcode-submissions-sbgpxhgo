class Solution {
    /**
     * @param {number[]} nums
    * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) { 
        let b = new Array(nums.length + 1).fill(0).map(() => []) 

        let count = {} 
         // { 7: 2 }
        for (const num of nums) {
            count[num] = ( count[num] || 0 ) + 1
        } 

        for (const key in count) {
            let freq = count[key] 
            b[freq].push(Number(key))
        } 

        let res = []  

        for (let i = b.length - 1; i > 0; i --) {
            for (const number of b[i]) {
                res.push(number)  
                if (res.length === k) { 
                    return res
                }
            }
        } 
    }
}
