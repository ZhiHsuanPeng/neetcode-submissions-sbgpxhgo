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
                return None 

            if node.val == subRoot.val: 
                if (self.isSameTree(node, subRoot)): 
                    res = True 

            dfs(node.left) 
            dfs(node.right) 

        dfs(root) 
        return res

    def isSameTree(self, n1, n2): 
        if not n1 and not n2: 
            return True 
        elif n1 and n2 and n1.val == n2.val:
            return (self.isSameTree(n1.left, n2.left) and self.isSameTree(n1.right, n2.right)) 
        else: 
            return False