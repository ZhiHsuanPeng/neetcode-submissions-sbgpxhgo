# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        
        def dfs(node, curMax): 
            if not node: 
                return 0 

            count = 1 if node.val >= curMax else 0 
            nextMax = max(node.val, curMax) 

            return count + dfs(node.left, nextMax) + dfs(node.right, nextMax) 

        return dfs(root, float('-inf')) 
