class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) { 
        let groups = {}

        for (const str of strs) {
            let bucket = new Array(26).fill(0) 

            for (const s of str) {
                bucket[s.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            } 

            let key = bucket.join('#') 
            if (!groups[key]) groups[key] = [] 
            groups[key].push(str)
        } 

        return Object.values(groups)
    }
}
