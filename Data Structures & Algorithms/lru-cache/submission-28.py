class Node: 
    def __init__(self, key = 0, val = 0, next = None, prev = None): 
        self.key = key
        self.val = val 
        self.next = next 
        self.prev = prev

class LRUCache:

    def __init__(self, capacity: int):
        self.cache = {} 
        self.head = Node() 
        self.tail = Node() 
        self.capacity = capacity 
        self.head.next = self.tail 
        self.tail.prev = self.head 

    def insert(self, node):  
        temp = self.head.next 

        self.head.next = node 
        node.next = temp 
        temp.prev = node 
        node.prev = self.head

    def remove(self, node): 
        prev = node.prev 
        next = node.next 
        prev.next = next 
        next.prev = prev 

        node.next = None 
        node.prev = None

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
            self.remove(self.cache[key]) 

        node = Node(key, value) 
        self.cache[key] = node 
        self.insert(node) 

        if len(self.cache) > self.capacity: 
            lru = self.tail.prev  
            self.remove(lru) 
            del self.cache[lru.key]

