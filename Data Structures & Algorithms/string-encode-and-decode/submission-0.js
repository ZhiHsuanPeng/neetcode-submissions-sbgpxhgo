class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) { 
        const res = [] 
        for (const str of strs) {
            res.push(str.length + '#' + str)
        } 

        return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { 

        let i = 0   
        const res = []
        while(i < str.length) {
            let j = i 
            while(str[j] !== "#") { 
                j ++
            } 

            const length = parseInt(str.substring(i, j)) 
            i = j + 1 
            j = i + length
            res.push(str.substring(i,j)) 
            i = j        
            
        } 

        return res
    }
}
