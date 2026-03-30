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
        if (digits.length === 0) return []; 
        
        const part = [] 
        const res = [] 
        this.dfs(0, digits, part, res) 
        return res
    } 


    dfs(i, digits, part, res) {
        if (part.length === digits.length) {
            res.push(part.join("")) 
            return
        } 

        let curWord = this.map.get(digits[i])
        for (let j = 0; j < curWord.length; j ++) {
            part.push(curWord[j]) 
            this.dfs(i + 1, digits, part, res) 
            part.pop()
        }
    }
}
