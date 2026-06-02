# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        dummy = ListNode(0, head) 

        fast = dummy 
        slow = dummy 

        while fast and fast.next: 
            fast = fast.next.next 
            slow = slow.next 

        h2 = slow.next 
        slow.next = None 

        prev = None 
        while h2: 
            temp = h2.next 
            h2.next = prev 
            prev = h2 
            h2 = temp 

        h1 = head 
        h2 = prev 

        while h1 and h2: 
            t1 = h1.next 
            t2 = h2.next 
            h1.next = h2 
            h2.next = t1 
            h1 = t1 
            h2 = t2 