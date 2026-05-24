# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        res = root 

        while True: 
            if min(p.val, q.val) <= res.val <= max(p.val, q.val): 
                return res 
            
            if res.val < min(p.val, q.val): 
                res = res.right 
            
            if res.val > max(p.val, q.val): 
                res = res.left