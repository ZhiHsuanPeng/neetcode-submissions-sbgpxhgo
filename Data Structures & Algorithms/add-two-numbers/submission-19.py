# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode() 
        node = dummy 

        carry = 0 
        while l1 or l2 or carry > 0:
            v1 = l1.val if l1 else 0 
            v2 = l2.val if l2 else 0 
            cur_sum = carry + v1 + v2 

            carry = cur_sum // 10 
            cur_val = cur_sum % 10 
            new_node = ListNode(cur_val) 
            node.next = new_node 
            node = node.next  

            if l1: 
                l1 = l1.next 
            
            if l2: 
                l2 = l2.next

        return dummy.next