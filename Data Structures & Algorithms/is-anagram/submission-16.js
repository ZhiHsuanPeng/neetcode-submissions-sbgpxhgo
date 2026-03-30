class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
         
        if (s.length !== t.length) return false  
     
        const bucket = new Array(26).fill(0) 

        for (let i = 0; i < s.length; i ++) {
            bucket[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++ 
            bucket[t.charCodeAt(i) - 'a'.charCodeAt(0)] -- 
        } 

        return bucket.every((num) => {
            return num === 0
        })
       
    }
}
