class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) { 
       let A = nums1 
  let B = nums2 

  let total = A.length + B.length 
  let half = Math.floor(total / 2) 
 
  if (A.length > B.length) {
    [A,B] = [B,A]
  }

  let l = 0 
  let r = A.length - 1 

  while(true) {
      let i = Math.floor((r + l) / 2) 
      let j = half - i - 2

      const Aleft = i >= 0 ? A[i] : -Infinity 
      const Aright = i + 1 < A.length ? A[i + 1] : Infinity 
      const Bleft = j >= 0 ? B[j]: -Infinity
      const Bright = j + 1 < B.length ? B[j + 1] : Infinity 

      if (Aleft <= Bright && Bleft <= Aright) {
        if (total % 2 === 0) {
          return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
        } else {
          return Math.min(Aright, Bright)
        }
      } else if (Aleft > Bright) {
        r = i - 1
      } else  {
        l = i + 1
      }
  }
    }
}
