class Solution:
    def letterCombinations(self, digits: str) -> List[str]: 
        if not digits:
            return []
            
        res = []

        phone = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        } 

        def dfs(i, cur): 
            if i == len(digits): 
                res.append("".join(cur)) 
                return 

            characters = phone[digits[i]]  

            for c in characters: 
                cur.append(c) 
                dfs(i + 1, cur) 
                cur.pop() 

        dfs(0, [])  

        return res