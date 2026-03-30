class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {   
        const keyPair = {}
        
        for (const str of strs) {
            let bucket = new Array(26).fill(0)
            for (const c of str) {
                const diff = c.charCodeAt(0) - 'a'.charCodeAt(0)
                bucket[diff] ++
            }

            let key = bucket.join('#')
            if (!keyPair[key]) {
                keyPair[key] = []
            }

            keyPair[key].push(str)
        }

        return Object.values(keyPair)
    }
}
