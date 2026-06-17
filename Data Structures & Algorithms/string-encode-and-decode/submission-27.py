class Solution:

    def encode(self, strs: List[str]) -> str: 
        res = "" 

        for s in strs: 
            res = res + str(len(s)) + '#' + s 

        return res

    def decode(self, s: str) -> List[str]:
        res = [] 

        l = 0  

        while l < len(s): 
            r = l 

            while s[r] != '#': 
                r += 1 

            length = int(s[l: r]) 

            start = r + 1 
            
            res.append(s[start: start + length]) 

            l = start + length 

        return res

        