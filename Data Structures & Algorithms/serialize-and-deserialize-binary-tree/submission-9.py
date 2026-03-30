# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Codec:
    
    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        res = [] 

        def dfs(node):  
            nonlocal res 

            if not node: 
                res.append('#') 
                return 

            res.append(str(node.val))
            dfs(node.left) 
            dfs(node.right)
        
        dfs(root) 
        return ",".join(res) 

    # Decodes your encoded data to tree.
    def deserialize(self, data: str) -> Optional[TreeNode]:  
        data = data.split(',')
        
        cur = 0
        def dfs():  
            nonlocal cur 

            if data[cur] == '#': 
                cur += 1 
                return None 

            new_node = TreeNode(int(data[cur])) 
            cur += 1 
            new_node.left = dfs() 
            new_node.right = dfs() 

            return new_node 

        return dfs()
            
