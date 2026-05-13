class Node: 
    def __init__(self, key = 0, value = 0, prev = None, nxt = None):
        self.key = key 
        self.value = value 
        self.prev = prev 
        self.nxt = nxt

class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity  
        self.cache = dict()
        self.head = Node() 
        self.tail = Node() 
        self.head.nxt = self.tail 
        self.tail.prev = self.head

    def insert(self, node): 
        temp = self.head.nxt 
        self.head.nxt = node 
        node.prev = self.head 
        temp.prev = node 
        node.nxt = temp

    def remove(self, node): 
        prev = node.prev 
        nxt = node.nxt 
        prev.nxt = nxt 
        nxt.prev = prev 
        node.nxt = None 
        node.prev = None

    def get(self, key: int) -> int:
        if key not in self.cache: 
            return -1 

        node = self.cache[key] 
        self.remove(node) 
        self.insert(node) 
        return node.value

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
        
