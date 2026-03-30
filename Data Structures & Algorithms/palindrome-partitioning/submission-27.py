class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = [] 

        def dfs(i, cur): 
            if i == len(s): 
                res.append(cur.copy()) 
                return 

            for j in range(i, len(s)): 
                partition = s[i: j + 1] 
                if self.isValid(partition): 
                    cur.append(partition) 
                    dfs(j + 1, cur) 
                    cur.pop() 

        dfs(0, []) 
        return res

    def isValid(slef, s): 
        l = 0 
        r = len(s) - 1 

        while l < r: 
            if s[l] != s[r]: 
                return False 

            l += 1 
            r -= 1 

        return True