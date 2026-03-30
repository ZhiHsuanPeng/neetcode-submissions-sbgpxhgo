# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        n = len(inorder)
        indices = {val: i for i,val in enumerate(inorder)} 

        idx = 0 

        def dfs(left, right):   
            nonlocal idx
            if left > right: 
                return None
            root_val = preorder[idx] 
            idx += 1 
            root = TreeNode(root_val) 
            mid_point = indices[root_val] 

            root.left = dfs(left, mid_point - 1) 
            root.right = dfs(mid_point + 1, right) 
            return root 

        return dfs(0, n - 1)
        