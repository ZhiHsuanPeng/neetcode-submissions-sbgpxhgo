class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */ 
    constructor() {
        this.map = new Map([]) 
        this.map.set("2", "abc")
        this.map.set("3", "def") 
        this.map.set("4", "ghi")
        this.map.set("5", "jkl") 
        this.map.set("6", "mno")
        this.map.set("7", "pqrs")
        this.map.set("8", "tuv")
        this.map.set("9", "wxyz")
    }

    letterCombinations(digits) {   
        if (digits.length === 0) return []
        const res = [] 
        const part = [] 
        this.dfs(0, digits, part, res) 
        return res
    } 


    dfs(i, digits, part, res) {
       if (i === digits.length) {
        res.push(part.join("")) 
        return
       } 

       let char = this.map.get(digits[i]) 

       for (const c of char) {
            part.push(c) 
            this.dfs(i + 1, digits, part, res) 
            part.pop()
       }
    }
}
