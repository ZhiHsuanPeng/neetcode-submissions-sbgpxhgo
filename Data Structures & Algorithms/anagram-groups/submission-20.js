class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {  
        let group = {}

        for (const str of strs) {
            let b = new Array(26).fill(0) 

            for (const c of str) {
                let shift = c.charCodeAt(0) - 'a'.charCodeAt(0) 
                b[shift] ++
            } 

            let key = b.join('#') 

            if (!group[key]) {
                group[key] = []
            } 

            group[key].push(str)
        } 

        return Object.values(group)
    }
}
