
## Code Snippets
### Sets
```java
// simple find
protected Node<T>, Node<T> find(Node start, int key) {
	Node pred, curr; // predecessor and current node in iteration
	curr = start; // from start node
	do { pred = curr; curr = curr.next(); } // move to next node
	while (curr.key() < key); // until curr.key >= key
	return (pred, curr); // return position
}
// simple has
public boolean has(T item) {
	int key = item.key(); // item’s key
	// find position of key from head Node
	pred, curr = find(head, key);
	// curr.key() >= key
	return curr.key() == key; // item can only appear here!
}
// simple add
public boolean add(T item) {
	Node node = new Node<>(item);
	pred, curr = find(head, item.key()); // curr.key >= item.key()
	if (curr.key() == item.key()) return false; // item already in set
	else // item not already in set: add node between pred and curr
	{ node.setNext(curr); pred.setNext(node); return true; }
}
// simple remove
public boolean remove(T item) {
	Node pred, curr = find(head, item.key());
	if (curr.key() > item.key()) return false; // item not in set
	else // item in set: remove node curr
	{ pred.setNext(curr.next()); return true; }
}
// hand-over-locking
protected Node<T>, Node<T> find(Node start, int key) {
	Node pred, curr; // predecessor and current node in iteration
	pred = start; curr = start.next(); // from start node
	pred.lock(); curr.lock(); // lock pred and curr nodes
	while (curr.key < key) {
		pred.unlock(); // unlock pred node
		pred = curr; curr = curr.next(); // move to next node
		curr.lock(); // lock next node
	} // until curr.key >= key return (pred, curr); //
	return position
}
// valid in optimistic set
protected boolean valid(Node<T> pred, Node<T> curr) {
  Node<T> node = head; // start from head
  while (node.key() <= pred.key()) { // does pred point to curr?
    if (node == pred) return pred.next() == curr;
      node = node.next(); // continue to the next node
  } // until node.pred > pred.key
  return false; // pred could not be reached
}
// lazy remove
public boolean remove(T item) {
  do { Node<T> pred, curr = find(head, item.key()); // no locking
    pred.lock(); curr.lock(); // now lock position
    try { // if position still valid, while locking:
      if (valid(pred, curr)) {
        if (curr.key() != item.key())
          return false; // item not in the set
        else { // item in the set at curr: remove it
          curr.setInvalid(); // logical removal
          pred.setNext(curr.next()); // physical removal
          return true;
        }
      }
    } finally { pred.unlock(); curr.unlock(); }// done: unlock
  } while (true); // if not valid: try again!
}
```
### Parallel Queues
```java
public void enqueue(T value) {
	QNode node = new QNode<>(value);
	while (true) // nodes at back of queue
	{
		QNode last = tail.get();
		QNode nextToLast = last.next.get(); // if tail points to last
		if (last == tail.get()) { // and if last really has no successor
			if (nextToLast == null) { // make last point to new node
				if (last.next.compareAndSet(nextToLast, node))
				// if last.next updated, try once to update tail
				{
					tail.compareAndSet(last, node);
					return;
				}
			} else {
        // last has valid successor:
        // try to update tail and repeat
					tail.compareAndSet(last, nextToLast);
}}    }
public T dequeue() throws EmptyException {
	while (true){ // nodes at front, back of queue
		QNode sentinel = head.get()
		last = tail.get()
		first = sentinel.next.get();
		if (sentinel == head.get()) { // if head points to sentinel
		// if tail also points to sentinel
			if (sentinel == last) { // empty queue: raise exception
				if (first == null) throw new EmptyException();
				// non-empty: update tail, repeat
				tail.compareAndSet(last, first);
			} else { // tail doesn’t point to sentinel
				T value = first.value;
				// make head point to first (new sentinel);
        // retry until success
				if (head.compareAndSet(sentinel, first)) return value;
}}}   }
```

### Peters
