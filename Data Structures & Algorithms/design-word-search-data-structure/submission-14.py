class Node: 
    def __init__(self): 
        self.desc = {} 
        self.isEnd = False

class WordDictionary:

    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        node = self.root 

        for c in word: 
            if c not in node.desc:
                node.desc[c] = Node()

            node = node.desc[c] 

        node.isEnd = True

    def search(self, word: str) -> bool:
        
        def dfs(i, curNode): 
            if i == len(word): 
                return curNode.isEnd

            curWord = word[i] 

            if curWord == '.': 
                for c in curNode.desc: 
                    if dfs(i + 1, curNode.desc[c]): 
                        return True 
                return False 
            else: 
                if curWord not in curNode.desc: 
                    return False 

                return dfs(i + 1, curNode.desc[curWord]) 

        return dfs(0, self.root)
