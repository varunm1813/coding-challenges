var cloneGraph = function(node) {
  return dfs(node, {});
};

function dfs(node, visited) {
  if (!node) return node;
  if (visited[node.val] != null) return visited[node.val];
  let root = new Node(node.val);
  visited[node.val] = root;
  for (let n of node.neighbors) {
    root.neighbors.push(dfs(n, visited));
  }
  return root;
}
