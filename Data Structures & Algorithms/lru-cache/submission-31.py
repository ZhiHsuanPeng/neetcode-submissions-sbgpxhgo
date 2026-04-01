class Node: 
    def __init__(self, key = 0, val = 0, next = None, prev = None): 
        self.key = key 
        self.val = val 
        self.next = next 
        self.prev = prev

class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity 
        self.cache = {} 
        self.head = Node() 
        self.tail = Node() 
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

        node = self.cache[key] 

        self.remove(node) 
        self.insert(node) 
        
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache: 
            node = self.cache[key] 
            self.remove(node) 

        newNode = Node(key, value) 
        self.cache[key] = newNode 
        self.insert(newNode) 

        if len(self.cache) > self.cap: 
            lru = self.tail.prev 
            del self.cache[lru.key] 
            self.remove(lru)
