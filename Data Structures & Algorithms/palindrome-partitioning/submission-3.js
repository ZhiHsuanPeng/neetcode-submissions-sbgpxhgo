class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) { 
        const res = [] 
        const part = [] 
        this.dfs(0, s, part, res) 
        return res
    } 


    dfs(i, s, part, res) {
        if (i === s.length) {
            res.push([...part]) 
            return
        } 

        for (let j = i; j < s.length; j ++) {
            if (this.isValid(s, i, j)) {
                part.push(s.substring(i, j + 1)) 
                this.dfs(j + 1, s, part, res) 
                part.pop()
            }
        }
    } 

    isValid(s, i, j) {
        while(i < j) {
            if (s[i] !== s[j]) {
                return false
            } 

            i ++ 
            j --
        } 

        return true
    }
}
