"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]': 
        if not head: 
            return None 
            
        node_dict = {} 

        node = head 
        while node: 
            node_dict[node] = Node(node.val) 
            node = node.next 

        node = head 
        while node: 
            node_dict[node].next = node_dict.get(node.next) 
            node_dict[node].random = node_dict.get(node.random)  
            node = node.next

        return node_dict[head]