class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
         # Build adjacency list: graph[node] = [(neighbor, price), ...]
        graph = defaultdict(list)
        for u, v, w in flights:
            graph[u].append((v, w))

        # Min-heap: (total_cost_so_far, current_node, stops_so_far)
        heap = [(0, src, 0)]

        # Dictionary to track the cheapest cost to reach a node with ≤ certain stops
        best = dict()

        while heap:
            cost, node, stops = heapq.heappop(heap)

            # If stops exceed limit, skip
            if stops > k + 1:  # k stops = k+1 edges
                continue

            # If we reached destination within allowed stops
            if node == dst:
                return cost

            # Avoid exploring worse paths
            if (node, stops) in best and best[(node, stops)] <= cost:
                continue
            best[(node, stops)] = cost

            # Explore neighbors
            for nei, price in graph[node]:
                heapq.heappush(heap, (cost + price, nei, stops + 1))

        return -1
