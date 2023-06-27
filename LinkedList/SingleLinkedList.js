class Node {
  constructor(data, next = null) {
    this.val = data
    this.next = next
  }
}

var MyLinkedList = function () {
  this.head = null
  this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (idx) {
  if (!this.size || idx < 0 || idx >= this.size) return -1
  let node = this.head
  let count = 0
  while (node) {
    if (count === idx) return node.val
    count++
    node = node.next
  }
  return -1
};

MyLinkedList.prototype.getNode = function (idx) {
  if (!this.size || idx < 0 || idx >= this.size) return null
  let node = this.head
  let count = 0
  while (node) {
    if (count === idx) return node
    count++
    node = node.next
  }
  return null
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (!this.head) {
    this.head = new Node(val)
    this.size++
    return
  }

  const prevHead = this.head;
  this.head = new Node(val, prevHead)
  this.size++
  return
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = new Node(val)
    this.size++
  } else {
    let node = this.head
    while (node.next) {
      node = node.next
    }
    node.next = new Node(val)
    this.size++
  }
  return
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (idx, val) {
  if (idx > this.size) return
  if (idx === this.size) return this.addAtTail(val)
  if (idx === 0) return this.addAtHead(val)
  const prev = this.getNode(idx - 1)
  const node = new Node(val)
  node.next = prev.next
  prev.next = node
  this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (idx) {
  if (idx >= this.size || idx < 0) return
  if (idx === 0) {
    const newHead = this.head.next
    this.head = newHead
    this.size--
    return
  }
  const prev = this.getNode(idx - 1)
  const curr = this.getNode(idx)
  prev.next = curr.next
  this.size--
  return
}

MyLinkedList.prototype.print = function () {
  let node = this.head
  while (node) {
    console.log(node.val + (node.next ? " =>" : " => null"))
    node = node.next
  }
  return
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.addAtIndex(3, 0);
myLinkedList.deleteAtIndex(1);

myLinkedList.addAtHead(6);
myLinkedList.addAtTail(4);
myLinkedList.get(4);
myLinkedList.addAtHead(4);
myLinkedList.addAtIndex(5, 0);
myLinkedList.addAtHead(6);
// linked list becomes 1->2->3
myLinkedList.print()


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */