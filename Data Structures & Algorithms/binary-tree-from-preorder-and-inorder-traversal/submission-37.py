# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        pos = { inorder[i]: i for i in range(len(inorder)) } 

        index = 0 

        def dfs(l, r):  
            nonlocal index 
            if r < l: 
                return None

            newVal = preorder[index] 
            newNode = TreeNode(newVal) 
            index += 1 

            midPos = pos[newVal] 
            newNode.left = dfs(l, midPos - 1) 
            newNode.right = dfs(midPos + 1, r) 
            return newNode 

        return dfs(0, len(inorder) - 1)