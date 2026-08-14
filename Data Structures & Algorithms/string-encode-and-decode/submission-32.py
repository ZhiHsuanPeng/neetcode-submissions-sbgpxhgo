class Solution:

    def encode(self, strs: List[str]) -> str: 
        res = "" 

        for s in strs: 
            length = len(s) 
            segment = str(length) + '#' + s 
            res += segment 

        return res

    def decode(self, s: str) -> List[str]:
        res = [] 

        l = 0 
        r = 0 

        while r < len(s): 

            while s[r] != '#': 
                r += 1 

            length = int(s[l: r]) 
            string = s[r + 1: r + 1 + length]  

            res.append(string)

            r = r + 1 + length 
            l = r   

        return res

        
