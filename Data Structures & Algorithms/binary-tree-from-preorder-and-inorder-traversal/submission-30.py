# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        index = { v: i for i, v in enumerate(inorder) } 

        cur = 0 

        def dfs(l, r): 
            nonlocal cur 

            if l > r:
                return None 

            val = preorder[cur] 
            cur += 1
            new_node = TreeNode(val) 
            mid = index[val] 
            new_node.left = dfs(l, mid - 1) 
            new_node.right = dfs(mid + 1, r) 

            return new_node 

        return dfs(0, len(preorder) - 1) 
        