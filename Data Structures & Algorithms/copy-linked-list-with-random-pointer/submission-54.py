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

        node = head 
        while node: 
            new_node = Node(node.val) 
            
            temp = node.next 
            node.next = new_node 
            new_node.next = temp 
            node = node.next.next 

        node = head 
        second = head.next 

        while node: 
            copy_node = node.next 
            copy_node.random = node.random.next if node.random else None
            node = node.next.next 
             
        node = head 
        while node: 
            copy_node = node.next 
            node.next = copy_node.next 
            copy_node.next = copy_node.next.next if copy_node.next else None 
            node = node.next 

        return second