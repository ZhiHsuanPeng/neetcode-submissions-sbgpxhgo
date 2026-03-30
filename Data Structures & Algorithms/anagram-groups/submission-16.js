class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {   
        
        const result = {}

        for (const str of strs) {
            const bucket = new Array(26).fill(0)
            for (const c of str) {
                bucket[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }
            const key = bucket.join('#')

            if (!result[key]) {
                result[key] = []
            }

            result[key].push(str)
        }

        return Object.values(result)
    }
}
