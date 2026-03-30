# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head) 
        groupPrev = dummy 

        while True: 
            start = groupPrev
            kNode = self.getK(start, k) 
            if not kNode:
                break

            start = groupPrev.next
            groupNext = kNode.next  
            prev = groupNext 

            while start != groupNext: 
                temp = start.next 
                start.next = prev 
                prev = start 
                start = temp 

            temp = groupPrev.next 
            groupPrev.next = prev 
            groupPrev = temp 

        return dummy.next

    def getK(self, node, k): 

        while k > 0 and node: 
            node = node.next 
            k -= 1 

        return node