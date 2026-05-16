# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head) 
        groupPrev = dummy   

        def getK(node): 
            cnt = k 

            while cnt > 0 and node: 
                node = node.next   
                cnt -= 1

            return node

            

        while True:  
            kNode = getK(groupPrev)
            if not kNode: 
                break 

            groupPost = kNode.next 

            n = groupPrev.next 
            prev = groupPost 

            while n != groupPost: 
                temp = n.next 
                n.next = prev 
                prev = n 
                n = temp 

            temp = groupPrev.next 
            groupPrev.next = prev 
            groupPrev = temp 

        return dummy.next