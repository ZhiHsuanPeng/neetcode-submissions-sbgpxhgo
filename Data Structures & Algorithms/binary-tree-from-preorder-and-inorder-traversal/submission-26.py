# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        index = {}
        for i, val in enumerate(inorder): 
            index[val] = i 

        cur = 0
        def build(l , r): 
            nonlocal cur 

            if l > r: 
                return None 

            val = preorder[cur]
            new_node = TreeNode(val) 
            cur += 1 
            new_node.left = build(l, index[val] - 1) 
            new_node.right = build(index[val] + 1, r) 

            return new_node 

        return build(0, len(preorder) - 1)