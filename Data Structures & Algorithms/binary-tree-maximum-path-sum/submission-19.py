# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int: 
        res = float('-inf')

        def dfs(node):  
            nonlocal res 

            if not node: 
                return 0 

            left = dfs(node.left)
            right = dfs(node.right) 

            left_val = left if left > 0 else 0 
            right_val = right if right > 0 else 0 

            res = max(res, node.val + left_val + right_val) 

            return node.val + max(left_val, right_val) 

        dfs(root) 
        return res
