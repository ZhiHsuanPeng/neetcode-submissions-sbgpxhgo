class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let group = {};

        for (const str of strs) {
            // generate key

            let bucket = new Array(26).fill(0);
            for (const c of str) {
                let diff = c.charCodeAt(0) - 'a'.charCodeAt(0)
                bucket[diff] ++
            }
            let key = bucket.join('#')

            // put string to its corresponding key array

            if (!group[key]) {
                group[key] = []
            }

            group[key].push(str)
        }

        return Object.values(group)
    }
}
