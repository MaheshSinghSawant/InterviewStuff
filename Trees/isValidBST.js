var isValidBST = function(root, min = null, max = null) {
  if(!root) return true
  if(max !== null && root.val >= max) {
      return false
  } else if(min !== null && root.val <= min) {
      return false
  } else {
      if(root.left && !isValidBST(root.left, min, root.val)) return false
      if (root.right && !isValidBST(root.right, root.val, max)) return false
  }

  return true
};