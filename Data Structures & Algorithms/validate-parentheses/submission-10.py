class Solution:
    def isValid(self, s: str) -> bool:
        close_bracket = { 
            ']': '[', 
            '}': "{", 
            ')': '('
        } 

        stack = [] 

        for c in s: 
            if c in close_bracket:  
                if len(stack) == 0: 
                    return False 
                    
                open_bracket = stack.pop() 
                if close_bracket[c] != open_bracket: 
                    return False 
            else: 
                stack.append(c) 

        return len(stack) == 0