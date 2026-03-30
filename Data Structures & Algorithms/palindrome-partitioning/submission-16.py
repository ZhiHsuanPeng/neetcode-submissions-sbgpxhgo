class Solution:
    def partition(self, s: str) -> List[List[str]]: 
        res = []  

        def dfs(start, part): 
            if start == len(s): 
                res.append(part.copy()) 
                return 

            for i in range(start, len(s)): 
                partition = s[start:i + 1]  
                if self.isPali(partition): 
                    part.append(partition) 
                    dfs(i + 1, part) 
                    part.pop()

        dfs(0, []) 
        return res


    def isPali(self, s): 
        l = 0 
        r = len(s) - 1 

        while l < r: 
            if s[l] != s[r]: 
                return False 
            l += 1 
            r -= 1 

        return True