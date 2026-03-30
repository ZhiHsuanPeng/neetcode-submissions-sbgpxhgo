class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) { 
        let a = nums1 
        let b = nums2 
        let total = a.length + b.length
        let half = Math.floor((total) / 2) 
        if (a.length > b.length) {
            [a, b] = [b, a]
        } 

        let l = 0 
        let r = a.length - 1 

        while(true) {
            let i = Math.floor((r + l) / 2) 
            let j = half - i - 2 

            let aLeft = i >= 0 ? a[i] : - Infinity 
            let aRight = i + 1 < a.length ? a[i + 1] : Infinity 
            let bLeft = j >= 0 ? b[j]: - Infinity 
            let bRight = j + 1 < b.length ? b[j + 1] : Infinity 

            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 === 0) {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
                } else {
                    return Math.min(aRight, bRight)
                }
            } else if (aLeft > bRight) {
                r = i - 1
            } else {
                l = i + 1
            }
        }
    }
}
