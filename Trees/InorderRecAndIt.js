/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(!root) return []
  let results = []
  const inOrderTraversal = (node) => {
      if(!node) return
      inOrderTraversal(node.left)
      results.push(node.val)
      inOrderTraversal(node.right)
      
  }
  inOrderTraversal(root)
return results
  
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(!root) return []
  let results = []
  let stack = []
  while(true) {
      if(root !== null) {
          stack.push(root)
          root = root.left
      } else {
          if(stack.length === 0) break
          root = stack.pop()
          results.push(root.val)
          root = root.right
      }
  }
  return results
};