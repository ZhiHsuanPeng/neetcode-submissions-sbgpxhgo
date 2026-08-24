class Solution:
    def isValid(self, s: str) -> bool:
        op = { 
            '(': ')', 
            '[': ']', 
            '{': '}'
        } 

        stack = [] 

        for c in s: 
            if c in op: 
                stack.append(op[c]) 
            else:  
                if not stack or c != stack.pop(): 
                    return False 

        return not stack