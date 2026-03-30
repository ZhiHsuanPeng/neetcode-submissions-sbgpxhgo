class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */ 

    constructor() { 
        this.heap = new MaxHeap()
    } 

    lastStoneWeight(stones) { 
        for (const s of stones) {
            this.heap.push(s)
        }  

        while(this.heap.size() > 1) {
            let first = this.heap.pop() 
            let second = this.heap.pop() 

            let remaining = first - second 
            if (remaining > 0) this.heap.push(remaining)
        } 

        return  this.heap.size() === 1 ? this.heap.top() : 0;
    }
} 

class MaxHeap {
  constructor() {
    this.heap = [];
  }

    size() {
        return this.heap.length;
    }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop(); // move last to root
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIdx = this.parent(index);
      if (this.heap[index] <= this.heap[parentIdx]) break; // ✅ fix
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let biggest = index;
      let left = this.left(index);
      let right = this.right(index);

      if (left < length && this.heap[left] > this.heap[biggest]) {
        biggest = left;
      }
      if (right < length && this.heap[right] > this.heap[biggest]) {
        biggest = right;
      }

      if (biggest === index) break;

      this.swap(index, biggest);
      index = biggest;
    }
  } 

  top() {
    return this.heap[0]
  }
}

