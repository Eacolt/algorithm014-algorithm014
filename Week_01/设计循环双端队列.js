/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.arr = new Array(k+1);
    this.capacity = k+1;
    this.front = 0;
    this.rear = 0;

};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull())return false;
    this.front = (this.front-1+this.capacity)%this.capacity;
    this.arr[this.front] = value;
    return true;

};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull())return false;
    this.arr[this.rear] = value;
    this.rear = (this.rear+1)%this.capacity;
    return true;

};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty())return false;
    this.front = (this.front+1)%this.capacity;
    return true;

};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty())return false;
    this.rear = (this.rear-1+this.capacity)%this.capacity;
    return true;

};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty())
  {
      return -1;
  }
  return this.arr[this.front]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty())return -1;
    return this.arr[(this.rear-1+this.capacity)%this.capacity];

};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.front === this.rear;

};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return (this.rear+1)%this.capacity === this.front;

};
 
var obj = new MyCircularDeque(2);
obj.insertFront(4);
obj.insertLast(7);
 

