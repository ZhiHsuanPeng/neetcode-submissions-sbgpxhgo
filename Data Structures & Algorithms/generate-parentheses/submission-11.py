class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        def dfs(start, end, cur): 
            if start == end and start == n: 
                res.append(cur) 
                return 
            
            if start < n:
                dfs(start + 1, end, cur + "(") 

            if start > end: 
                dfs(start, end + 1, cur + ")")  

        dfs(0, 0, "") 
        return res
            