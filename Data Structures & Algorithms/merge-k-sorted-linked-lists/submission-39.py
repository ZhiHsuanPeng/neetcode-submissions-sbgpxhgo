# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if len(lists) == 0 or not lists:  
            return None 

        while len(lists) > 1: 
            merged = [] 

            for i in range(0, len(lists), 2): 
                l = lists[i] 
                r = lists[i  + 1] if i + 1 < len(lists) else None 
                m = self.merge(l, r) 
                merged.append(m) 

            lists = merged

        return lists[0]

    def merge(self, l, r):  
        dummy = ListNode()  
        pointer = dummy 

        while l and r:  
            if l.val < r.val: 
                pointer.next = l 
                l = l.next 
            else: 
                pointer.next = r 
                r =  r.next 

            pointer = pointer.next 

        if l:  
            pointer.next = l 

        if r: 
            pointer.next = r  

        return dummy.next