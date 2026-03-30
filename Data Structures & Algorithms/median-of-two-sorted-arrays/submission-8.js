class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) { 
        let a = nums1 
        let b = nums2 

        let totalLen = a.length + b.length 
        let halfLen = Math.floor(totalLen / 2) 

        if (a.length > b.length) {
            [a, b] = [b, a]
        }  

        let l = 0 
        let r = a.length - 1
        while(true) {
            let i = Math.floor((l + r) / 2) 
            let j = halfLen - i - 2 

            let aLeft = i >= 0 ? a[i] : - Infinity 
            let aRight = i + 1 < a.length ? a[i + 1] : Infinity 
            let bLeft = j >= 0 ? b[j] : - Infinity 
            let bRight = j + 1 < b.length ? b[j + 1] : Infinity 

            if (aLeft <= bRight && bLeft <= aRight) {
                if (totalLen % 2 === 0) {
                    let left = Math.max(aLeft, bLeft) 
                    let right = Math.min(aRight, bRight) 
                    return (left + right) / 2
                } else {
                    return Math.min(aRight, bRight)
                }
            } else if (aLeft > bRight) {
                r = i - 1
            }  else {
                l = i + 1
            }
        }
    }
}
