# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:         
        rt = 0

        def rec(node):  
            nonlocal rt

            if not node: 
                return 0 

            left = rec(node.left) 
            right = rec(node.right) 
            rt = max(rt, left + right) 

            return 1 + max(left, right)  

        rec(root)

        return rt