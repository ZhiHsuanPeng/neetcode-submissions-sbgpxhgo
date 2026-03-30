class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []  

        def dfs(start, cur): 
            if start == len(s): 
                res.append(cur.copy()) 
                return 

            for i in range(start, len(s)):  
                sliced = s[start: i + 1]
                if self.isValid(sliced): 
                    cur.append(sliced) 
                    dfs(i + 1, cur) 
                    cur.pop() 

        dfs(0, []) 
        return res


    def isValid(self, s): 
        l = 0 
        r = len(s) - 1 

        while l < r: 
            if s[l] != s[r]: 
                return False 

            l +=1 
            r -= 1 

        return True