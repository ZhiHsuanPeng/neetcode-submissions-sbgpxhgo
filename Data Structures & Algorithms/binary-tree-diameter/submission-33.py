# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        
        res = [0]
        def dfs(node, temp): 
            if not node: 
                return 0 
            left = dfs(node.left, temp) 
            right = dfs(node.right, temp)
            diameter = left + right
            temp[0] = max(temp[0], diameter) 
            return 1 + max(left, right) 

        dfs(root, res) 
        return res[0]