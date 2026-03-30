class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Count = new Array(26).fill(0)
        let s2Count = new Array(26).fill(0)
        for (let i = 0; i < s1.length; i ++) {
            s1Count[s1.charCodeAt(i) - 97] ++
            s2Count[s2.charCodeAt(i) - 97] ++
        }

        if (this.isMatch(s1Count, s2Count)) {
            return true
        }

        let l = 0
        for (let r = s1.length; r < s2.length; r ++) {
            let added = s2[r]
            let deleted = s2[l]

            s2Count[added.charCodeAt(0) - 97] ++ 
            s2Count[deleted.charCodeAt(0) - 97] --

            if (this.isMatch(s1Count, s2Count)) {
                return true
            }
            l ++
        }

        return false
    }


    isMatch(arr1, arr2) {
        let matches = 0
        for (let i = 0; i < arr1.length; i ++) {
            if (arr1[i] === arr2[i]) {
                matches ++
            }
        }

        return matches === 26
    }
}
