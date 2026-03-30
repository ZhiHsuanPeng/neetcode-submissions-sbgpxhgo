# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        res = False

        def dfs(node): 
            nonlocal res 

            if not node: 
                return   

            if node.val == subRoot.val: 
                res = res or self.isTheSame(node, subRoot) 

            dfs(node.left) 
            dfs(node.right) 

        dfs(root) 
        return res    



    def isTheSame(self, p, q): 
        if not p and not q: 
            return True 
        elif p and q and p.val == q.val: 
            return self.isTheSame(p.left, q.left) and self.isTheSame(p.right, q.right) 
        else: 
            return False