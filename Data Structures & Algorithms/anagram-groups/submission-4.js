class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let pair = {}

        for (const str of strs) {
            let bucket = new Array(26).fill(0);
            for (const c of str) {
                bucket[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }

            let key = bucket.join('#')

            if (!(pair[key])) {
                pair[key] = []
            }

            pair[key].push(str)
        }

        return Object.values(pair)
}
}