# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # split the input 
        dummy = ListNode(0, head) 
        fast = dummy 
        slow = dummy 

        while fast and fast.next: 
            fast = fast.next.next 
            slow = slow.next 

        second = slow.next 
        slow.next = None 

        # reverse second part of the list 
        prev = None 
        while second: 
            temp = second.next 
            second.next = prev 
            prev = second 
            second = temp

        # rewiring the list
        second = prev
        first = head 

        while second and first: 
            temp1 = first.next 
            temp2 = second.next 

            first.next = second 
            second.next = temp1 
            first = temp1 
            second = temp2 
        