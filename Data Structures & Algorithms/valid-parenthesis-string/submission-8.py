class Solution:
    def checkValidString(self, s: str) -> bool:
        left = [] 
        star = [] 

        for i in range(len(s)): 
            c = s[i] 
            if c == ')': 
                if not left and not star: 
                    return False 
                
                if not left: 
                    star.pop() 
                else: 
                    left.pop() 
            elif c == '(': 
                left.append(i) 
            else: 
                star.append(i) 

        while left and star: 
            if left.pop() > star.pop(): 
                return False 

        return not left