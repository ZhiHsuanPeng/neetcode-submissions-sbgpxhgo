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

            nodeVal = preorder[cur] 
            newNode = TreeNode(nodeVal) 
            cur += 1 

            midPosition = index[nodeVal] 
            newNode.left = dfs(l, midPosition - 1) 
            newNode.right = dfs(midPosition + 1, r) 
            
            return newNode 

        return dfs(0, len(preorder) - 1)