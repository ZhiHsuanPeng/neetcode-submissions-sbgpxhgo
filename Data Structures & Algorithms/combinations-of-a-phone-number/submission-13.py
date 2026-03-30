class Solution:
    def letterCombinations(self, digits: str) -> List[str]: 
        if not digits:
            return []
        letterMap = { 
            '2': 'abc', 
            '3': 'def', 
            '4': 'ghi', 
            '5': 'jkl', 
            '6': 'mno', 
            '7': 'pqrs', 
            '8': 'tuv', 
            '9': 'wxyz'
        }  

        res = [] 

        def dfs(i, part):  
            if i == len(digits): 
                res.append(''.join(part)) 
                return 

            curNum = digits[i] 
            letter = letterMap[curNum] 

            for j in range(len(letter)): 
                part.append(letter[j]) 
                dfs(i + 1, part) 
                part.pop() 

        dfs(0, []) 
        return res
             

             
