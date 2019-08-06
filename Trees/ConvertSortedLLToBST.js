// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

let getLinkedListLength = head => {
  let count = 0
  while(head) {
      count = count + 1
      head = head.next
  }
  return count
}

var sortedListToBST = function(head) {
  const listToTree = (start, end) => {
      if(start >= end) return null
      let mid = Math.floor((start + end)/2)
      let left = listToTree(start, mid)
      let root  = new TreeNode(head.val)
      root.left = left
      head = head.next
      root.right = listToTree(mid + 1, end)
      return root
  }
  return listToTree(0, getLinkedListLength(head))
};