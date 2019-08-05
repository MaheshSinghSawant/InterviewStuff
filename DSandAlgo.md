50 good questions: pretty hard
https://www.byte-by-byte.com/wp-content/uploads/2019/01/50-Coding-Interview-Questions.pdf

- [LeetCode Probems](#LeetCode-Probems)
  - [Easy](#Easy)
    - [Reverse LinkedList](#Reverse-LinkedList)
    - [Circular LinkedList](#Circular-LinkedList)
  - [Medium](#Medium)
  - [Hard](#Hard)
  - [Other](#Other)
    - [Median of Arrays](#Median-of-Arrays)

# LeetCode Probems



## Easy

### Reverse LinkedList
https://leetcode.com/problems/reverse-linked-list/

### Circular LinkedList
```--- Directions
Given a linked list, return true if the list
is circular, false if it is not.
--- Examples

  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  circular(l) // true
  ```

- Have a slow and fast pointer, both point to the head
- increment fast to fast.next.next and slow to slow.next **Makes sure to check if both fast.next and fast.next.next exist while loop condition**
- at some point they will be equal if a loop exists, if so return true

```
function circular(head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
 ```


## Medium

## Hard

## Other


### Median of Arrays


https://www.byte-by-byte.com/median/?utm_source=optin_carrot&utm_medium=pdf&utm_campaign=50questions

watch till 5 mins of https://www.youtube.com/watch?v=HGgdcKbC5ro#action=share
```
const findMedian = (arr1, arr2) => {
  const findMedianForOne = (arr) => {
    const len = arr.length
    const middle = Math.floor(len / 2)
    return len % 2 ? arr[Math.floor(middle)] : (arr[middle] + arr[middle - 1]) / 2
  }
  const findRecursiveSubArray = (A, B) => {
    console.log('A', A)
    console.log('B', B)
    // case for when both the arrays are of the same size
    if (A.length === 2 && B.length === 2) {
      return (Math.max(A[0], B[0]) + Math.min(A[1], B[1])) / 2
    }
    // cases when one of the arrays is now empty
    if (!A.length) {
      return findMedianForOne(B)
    }
    if (!B.length) {
      return findMedianForOne(A)
    }
    if(A.length === 1 && B.length ===1) {
      return ((A[0] + B[0])/2)
    }
   if(A.length && B.length && A.length + B.length === 3) {
      const threeArr = A.concat(B)
      threeArr = threeArr.sort()
      return threeArr[Math.floor(threeArr.length/2)]
    }
    const medianA = findMedianForOne(A)
    const medianB = findMedianForOne(B)
    let newA, newB
    if (medianA >= medianB) {
      newA = A.slice(0, Math.ceil(A.length / 2))
      newB = B.slice(B.length / 2)

    } else if (medianA < medianB) {
      newA = A.slice(A.length / 2)
      newB = B.slice(0, Math.ceil(B.length / 2))
    }
    return findRecursiveSubArray(newA, newB)
  }
  const ans = findRecursiveSubArray(arr1, arr2)
  return ans
}

console.log(findMedian([1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 10, 10]))
 ```
