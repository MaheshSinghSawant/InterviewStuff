class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  pushW(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return;
  }

  pushWithoutTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let newtail = current;

    while (current.next) {
      newtail = current;
      current = current.next;
    }

    this.tail = newtail;
    this.tail.next = null;
    return current;
  }

  popWithoutTail() {
    if (!this.head) return;
    let current = this.head;
    let newtail = current;

    while (current.next) {
      newtail = current;
      current = current.next;
    }

    newtail.next = null;
    return current;
  }
}
