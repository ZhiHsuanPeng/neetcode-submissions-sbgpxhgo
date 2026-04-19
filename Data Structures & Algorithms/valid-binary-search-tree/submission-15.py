# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
         
        def dfs(curNode, left, right): 
            if not curNode:
                return True 

            if left < curNode.val < right: 
                return dfs(curNode.left, left, curNode.val) and dfs(curNode.right, curNode.val, right) 

            return False 

        return dfs(root, float('-inf'), float('inf'))