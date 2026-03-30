class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def dfs(open, close, cur): 
            if n == open == close: 
                res.append(cur) 
                return 

            if open < n: 
                dfs(open + 1, close, cur + '(') 
                 
            if open > close: 
                dfs(open, close + 1, cur + ')') 

        dfs(0, 0, "") 
        return res