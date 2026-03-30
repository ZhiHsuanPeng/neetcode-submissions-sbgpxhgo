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

        node_map = {} 

        dummy = head 
        node = head 
        while node: 
            node_map[node] = Node(node.val) 
            node = node.next 

        node = head 
        while node: 
            node_map[node].next = node_map.get(node.next) 
            node_map[node].random = node_map.get(node.random) 
            node = node.next 

        return node_map[head]