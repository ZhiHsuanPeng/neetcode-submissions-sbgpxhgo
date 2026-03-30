class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) { 
        this.pq = new MinHeap()  
        this.k = k

        for (const num of nums) {
            this.pq.push(num)
        }  

        while(this.pq.heap.length > this.k) {
            this.pq.pop()
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) { 
        this.pq.push(val) 

        while(this.pq.heap.length > this.k) { 
            this.pq.pop()
        } 

        return this.pq.peek()
    }
} 

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return 2 * i + 1;
  }
  getRight(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[i] < this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapifyDown(i) {
    let smallest = i;
    const left = this.getLeft(i),
      right = this.getRight(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0] ?? null;
  }
}

