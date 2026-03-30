class Solution:
    def isValid(self, s: str) -> bool:
        openBracket = { '{': '}', '[': ']', '(': ')' } 

        stack = [] 

        for b in s: 
            if b in openBracket: 
                stack.append(b) 
            else:  
                if len(stack) == 0: 
                    return False 
                    
                if stack: 
                    last = stack.pop() 
                    if last not in openBracket or openBracket[last] != b: 
                        return False 

        return True if len(stack) == 0 else False