class Solution:
    def isValid(self, s: str) -> bool:
        openP = { 
            '{': '}',  
            '[': ']',
            '(': ')'
        }  

        stack = [] 

        for p in s:  
            if p in openP:  
                stack.append(openP[p])
            else: 
                if not stack: 
                    return False 

                if stack.pop() != p: 
                    return False

        return True if len(stack) == 0 else False