# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root or not p or not q: 
            return None 

        cur = root 
        if min(p.val, q.val) > cur.val: 
            return self.lowestCommonAncestor(cur.right, p, q) 
        elif max(p.val, q.val) < cur.val: 
            return self.lowestCommonAncestor(cur.left, p, q) 
        else: 
            return root