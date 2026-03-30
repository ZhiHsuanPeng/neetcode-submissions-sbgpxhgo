class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let l = 0;
      let r = numbers.length - 1;
        
      while(l < r) {
        let cur = numbers[l] + numbers[r]

        if (cur < target) {
            l ++
        } else if ( cur > target) {
            r --
        } else {
            return [l + 1, r + 1]
        }
      }

    }
    
}
