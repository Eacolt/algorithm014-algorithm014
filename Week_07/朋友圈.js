var fa = [];
for (let i = 0; i < 1000; i++) {
  fa[i] = 0;
}
let find = (x) => {
  if (fa[x] == x) return x;
  return (fa[x] = find(fa[x]));
};
function findCircleNum(M) {
  let MSize = M.length;
  let MColSize = M[0].length;
  for (let i = 0; i < MSize; i++) {
    fa[i] = i;
  }
  let ans = MSize;
  for (let i = 0; i < MSize; i++) {
    for (let j = 0; j < MColSize; j++) {
      if (M[i][j] == 0) continue;
      if (find(fa[i]) != find(fa[j])) {
        fa[find(i)] = fa[find(j)];
        ans--;
      }
    }
  }
  return ans;
}
