/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let node = root
  let pVal = p.val
  let qVal = q.val
  while(node) {
      let parentVal = node.val
      console.log(parentVal)
      if(pVal > parentVal && qVal > parentVal) {
          console.log('went right')
          node = node.right
      } else if(pVal < parentVal && qVal < parentVal) {
          console.log('went left')
          node = node.left
      } else {
          return node
      }
  }
  
  return null
};