# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        curK = 0 
        res = 0
        def dfs(node):  
            nonlocal curK, res  
            if not node or res: 
                return  

            dfs(node.left) 
            curK += 1 
            if k == curK: 
                res = node.val 
            dfs(node.right) 

        dfs(root)
        return res