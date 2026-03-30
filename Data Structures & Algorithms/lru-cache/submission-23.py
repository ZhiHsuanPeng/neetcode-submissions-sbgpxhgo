class Node:
    def __init__(self, key = 0, val = 0, prev = None, next = None):  
        self.key = key
        self.val = val 
        self.prev = prev 
        self.next = next

class LRUCache:
    def __init__(self, capacity: int):
        self.head = Node() 
        self.tail = Node() 
        self.cache = {} 
        self.max_cap = capacity 
        self.head.next = self.tail
        self.tail.prev = self.head 

    def remove(self, node): 
        prev = node.prev 
        nxt = node.next 
        prev.next = nxt 
        nxt.prev = prev 


    def insert(self, node): 
        tmp = self.head.next 
        self.head.next = node 
        node.prev = self.head 
        node.next = tmp 
        tmp.prev = node


    def get(self, key: int) -> int:
        if key not in self.cache: 
            return -1 
        else: 
            node = self.cache[key] 
            self.remove(node) 
            self.insert(node) 
            return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache: 
            node = self.cache[key] 
            self.remove(node) 

        new_node = Node(key, value) 
        self.cache[key] = new_node 
        self.insert(new_node) 

        if len(self.cache) > self.max_cap: 
            lru = self.tail.prev 
            self.remove(lru) 
            del self.cache[lru.key]
