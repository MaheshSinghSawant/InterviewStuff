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

/*
1. Initialize current as root 
2. While current is not NULL
   If current hs a left child
      ifa) Make current as right child of the rightmost 
         node in current's left subtree
      ifb) Go to this left child, i.e., current = current->left
   Else
      ea) Print current’s data
      eb) Go to the right, i.e., current = current->right

in the foll example ive done it the other way around with the if and else case


*/

var inorderTraversalMorris = function(root) {
  let results = []
  let curr = root
  while (curr !== null) {
      if(curr.left === null) {
          results.push(curr.val)
          curr = curr.right
      } else {
          let pre = curr.left
          while(pre.right !== null) {
              pre = pre.right
          }
          pre.right = curr
          let temp = curr
          curr = curr.left
          temp.left = null
      }
  }
  
  return results
};