function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}

var ans;
function lowestCommonAncestor(root, p, q) {
   dfs(root,p,q);
   return ans;

}

function dfs(root, p, q) {
	if (root == null) return false;
	let lson = dfs(root.left, p, q);
	let rson = dfs(root.right, p, q);
	if ((lson && rson) ||
		((root.val === p.val || root.val === q.val) &&
			(lson || rson)
		)
	){
		ans = root;
	}
	return lson || rson || (root.val === p.val || root.val === q.val)

}

function main()
{
	//测试用例
	var root = new TreeNode(3);
	root.left = new TreeNode(5);
	root.right = new TreeNode(1);
	root.left.left = new TreeNode(6);
	root.left.right = new TreeNode(2);
	
	root.right.left = new TreeNode(0);
	root.right.right = new TreeNode(8);
	
	root.left.right.left = new TreeNode(7);
	root.left.right.right = new TreeNode(4);
	
	console.log(lowestCommonAncestor(root,root.left,root.right))
}
main();

/**
 * 使用树的后序遍历，从最树的最末的节点找，一层层向上找到根节点，这样找的方式是可以找出最大深度的公共祖先节点。
 * 通过深度优先搜索DFS，找出满足下列条件：
 * 1.左子树和右子树均包含 p 节点或 q 节点
 * 2.如果左子树包含的是 p 节点，那么右子树只能包含 q 节点
 * 满足这些条件，就找到了
 */