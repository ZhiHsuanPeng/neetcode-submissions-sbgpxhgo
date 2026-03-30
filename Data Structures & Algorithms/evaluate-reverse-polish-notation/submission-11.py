class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # init operands set ( used for look up ) and stack  
        s = [] 

        # for loop the tokens input 
        for t in tokens: 
            if t == '+': 
                s.append(s.pop() + s.pop()) 
            elif t == '-': 
                first = s.pop() 
                second = s.pop() 
                s.append(second - first) 
            elif t == '*': 
                s.append(s.pop() * s.pop()) 
            elif t == '/': 
                first = s.pop() 
                second = s.pop() 
                s.append(math.trunc(second / first)) 
            else: 
                s.append(int(t))

        return s[0]