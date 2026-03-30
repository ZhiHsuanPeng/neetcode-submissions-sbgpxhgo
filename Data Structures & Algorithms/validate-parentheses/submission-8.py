class Solution:
    def isValid(self, s: str) -> bool:
        pairs = { '{': '}', '[': ']', '(': ')' } 

        stack = [] 

        for b in s: 
            if b in pairs: 
                stack.append(pairs[b]) 
            else:  
               if not stack or stack.pop() != b: 
                return False

        return True if len(stack) == 0 else False