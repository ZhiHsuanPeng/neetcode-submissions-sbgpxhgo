class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) { 
        if (s2.length < s1.length) return false 
        
        let targetBucket = new Array(26).fill(0)  

        for (let i = 0; i < s1.length; i ++) {
            targetBucket[s1.charCodeAt(i) - 'a'.charCodeAt(0)] ++ 
            targetBucket[s2.charCodeAt(i) - 'a'.charCodeAt(0)] --     
        }  

        if (targetBucket.every((num) => num === 0)) {
                return true
            }

        let l = 0 
        for (let r = s1.length; r < s2.length; r ++) {
            targetBucket[s2.charCodeAt(l) - 'a'.charCodeAt(0)] ++ 
            targetBucket[s2.charCodeAt(r) - 'a'.charCodeAt(0)] --  
            l ++
            if (targetBucket.every((num) => num === 0)) {
                return true
            }
        } 

        return false
        
    }
}
