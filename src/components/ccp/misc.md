### Java threads
```java
Thread u = new Thread(counter);
u.start()
u.join()
u.sleep()

// with pool
Thread t = new Thread(counter);
Thread u = new Thread(counter);
ExecutorService pool=Executors.newWorkStealingPool();
// schedule t and u for execution
Future<?> ft = pool.submit(t);
Future<?> fu = pool.submit(u);
try {
  ft.get(); fu.get();
}
catch (InterruptedException ExecutionException e){
  System.out.println("Int!");
}

// without pool
Thread t = new Thread(counter);
Thread u = new Thread(counter);
t.start(); // increment once
u.start(); // increment twice
try { // wait for termination
  t.join(); u.join();
}
catch (InterruptedException e)
{
  System.out.println("Int!");
}
```

#### Genserver
```erlang
start(InitialState, Handler) ->
  spawn(fun () -> loop(InitialState, Handler) end).

stop(Server) -> Server ! {stop, self(), 0},
request(Server, Request) ->
	Ref = make_ref(), Server ! {request, self(), Ref, Request},
	receive {response, Ref, Result} -> Result end.

loop(State, Handler) ->
	receive
	{request, From, Ref, Request} -> % run handler on request
		case Handler(State, Request) of % get handler’s output
			{reply, NewState, Result} -> % the requester gets the result
				From ! {response, Ref, Result},
				loop(NewState, Handler)
		end;
		{stop, _From, _Ref} -> ok
	end.
```
### How validation works
What can happen between the time when a thread finds a position (pred, curr) and when it locks nodes pred and curr?
- Node pred is removed: validation fails because pred is not reachable
- Node curr is removed: validation fails because pred does not point to curr
- A node is added between pred and curr: validation fails because pred does not point to curr
- Any other modification of the set: validation succeeds because operations leave the set in a consistent state

What happens if the set is being modified while a thread is validating a locked position (pred, curr)?
- If a node following curr is modified: validation is not affected because it only goes up until curr
- If a node n before pred is removed: validation succeeds even if it goes through n, since n still leads back to pred
- If a node n is addded before pred: validation succeeds even if it skips over n

### Amdahls law
$maximum \ speedup = \frac {1}{(1-p)+ \frac pn}$ where (1-p) = sequental part and p/n = prallel part
### Coffmann
Necessary conditions for a deadlock to occur:
1. Mutual exclusion: threads may have exclusive access to the shared resources
2. Hold and wait: a thread may request one resource while holding another one
3. No preemption: resources cannot forcibly be released from threads that hold them
4. Circular wait: two or more threads form a circular chain where each thread waits for a resource that the next thread in the chain is holding.

### Misc
- For Java programs, we have SC for programs without data races

###
Table
| shorthand | state    | p moves               | q moves               |
| -- | --------------- | --------------------- | --------------------- |
| s1 |(2, 2, f, f, f ) | (3, 2, t, f, f ) = s3 | (2, 3, f, t, f )  = s2|
| s2 |(2, 3, f, t, f ) | (3, 3, t, t, f ) = s4 | (2, 5, f, t, t )  = s5|
| s3 |(3, 2, t, f, f ) | (5, 2, t, f, t ) = s6 | (3, 3, t, t, f )  = s4|
| s4 |(3, 3, t, t, f ) | (5, 3, t, t, t) = s7  | (3, 5, t, t, t ) = s8 |
| s5 |(2, 5, f, t, t ) | (3, 5, t, t, t ) = s8 | (2, 2, f, f, f )  = s1|
| s6 |(5, 2, t, f, t ) | (2, 2, f, f, f ) = s1 | (5, 3, t, t, t )  = s7|
| s7 |(5, 3, t, t, t ) | (2, 3, f, t, f ) = s2 | -                     |
| s8 |(3, 5, t, t, t ) | -                     | (3, 2, t, f, f )  = s3|
