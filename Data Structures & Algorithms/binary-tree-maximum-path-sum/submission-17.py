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

            v1 = left if left > 0 else 0 
            v2 = right if right > 0 else 0 

            res = max(res, v1 + v2 + node.val) 

            return max(node.val + v1, node.val + v2) 

        dfs(root) 
        return res