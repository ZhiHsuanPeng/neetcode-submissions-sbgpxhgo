class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (const str of strs) {
            let key = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                let diff = str[i].charCodeAt(0) - 'a'.charCodeAt(0)
                key[diff] ++
            }
            key = key.join('#')

            if (!(map[key])) {
                map[key] = [];
            }

            map[key].push(str)
        }

        return Object.values(map)
    }
}
