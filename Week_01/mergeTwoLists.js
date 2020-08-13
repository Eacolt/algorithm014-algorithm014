function ListNode(val) {
	this.val = val;
	this.next = null;
}
//创建链表结构
var nodeListA1 = new ListNode(0);
var nodeListA2 = new ListNode(100);
var nodeListA3 = new ListNode(150);
nodeListA1.next = nodeListA2;
nodeListA2.next = nodeListA3;

var nodeListB1 = new ListNode(9);
var nodeListB2 = new ListNode(13);
var nodeListB3 = new ListNode(88);
nodeListB1.next = nodeListB2;
nodeListB2.next = nodeListB3;

//合并有序链表
function mergeTwoLists(l1, l2) {
	var node = new ListNode(0);
	var currentNode = node;
	while (l1 != null && l2 != null) {
		if (l1.val < l2.val) {
			currentNode.next = l1;
			l1 = l1.next;
		} else {
			currentNode.next = l2;
			l2 = l2.next;
		}
		currentNode = currentNode.next;
	}
	currentNode.next = l1 != null ? l1 : l2;
	return node.next;

}
//最终合并链表
var merged = mergeTwoLists(nodeListA1, nodeListB1);
//输出链表内容
function printLink(linkNode) {
	let linkStr = "";
	let p = linkNode;
	while (p) {
		linkStr += p.val + "-"
		p = p.next;
	}
	console.log(linkStr);
}
//打印测试链表
printLink(merged);
