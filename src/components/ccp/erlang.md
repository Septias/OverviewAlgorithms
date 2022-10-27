### Erlang
```erlang
power: power()
div, rem, not, and, or, elsor
%operators
not equal: =/=
equal: =:=
numeric equal: ==
% order
𝑛𝑢𝑚𝑏𝑒𝑟 < 𝑎𝑡𝑜𝑚 < 𝑟𝑒𝑓𝑒𝑟𝑒𝑛𝑐𝑒 < 𝑓𝑢𝑛 < 𝑝𝑜𝑟𝑡 < 𝑝𝑖𝑑 < 𝑡𝑢𝑝𝑙𝑒 < 𝑚𝑎𝑝 < 𝑙𝑖𝑠𝑡
```
```erlang
% ad-hoc code blocks
begin... end
% guards
f(Pk1, . . . , Pkn) when Ck1, Ck2, . . . -> Ek;
% printing
io:format("~s ~B. ~p~n~s ~B~n", ["line", 1, true, "line", 2])
% using functions as params
map(fun m:age/1, [12, 1, 30, 56]).
% mulitple messages
Pidn1 ! Pidn2 ! … ! Pidn ! Message
% mailbox
% how many elements are in the mailbox
process_info(Pid, message_queue_len)
%list of messages in the mailbox (oldest to newest)
process_info(Pid, messages)
flush() % empty the current process’s mailbox
```
#### Records:
```erlang
-record(person, { name="add name", age })
#person{age=22} =:= #person{name="add name", age=22}
Student#person.age
```
#### Patterns:
```erlang
{X, Y} = {"a", [2, 3]}
{X, 3}
[H | T]
[H | [2]]
[F, S] = [foo, bar]
```
#### List functions:
```erlang
length(L)
hd(L)
tl(L)
L1 ++ L2 % concatenation
L1 -- L2 % removal
[H | L] % a copy of L with H added as first "head" element
```
#### List comprehensions:
```erlang
[X*X || X <- [1, 2, 3, 4]] % is [1, 4, 9, 16]
[X || X <- [1, -3, 10], X > 0] % is [1, 10]
[{A, B} || A <- [carl, sven], B <- [carlsson, svensson]]
% is [{carl, carlsson}, {carl, svensson},
% {sven, carlsson}, {sven, svensson}]
```
#### If
```erlang
if C1 -> E1; Cm -> Em end
```
#### Case
```erlang
case E of P1 -> E1; Pm -> Em end
```
#### Exceptions
```erlang
try Expr of Success1 -> Expr1; …
catch Error1:Fail1 -> Recov1; … after After end
```
#### Inline functions
```erlang
fun (A1) -> E1; (An) -> En end
```
#### List functions
```erlang
all(Pred, List) % do all elements E of List satisfy Pred(E)?
any(Pred, List) % does any element E of List satisfy Pred(E)?
filter(Pred, List) % all elements E of List that satisfy Pred(E)
last(List) % last element of List
map(Fun, List) % apply Fun to all elements of List
member(Elem, List) % is Elem an element of List?
reverse(List) % List in reverse order
seq(From, To) % list [From, From+1, ..., To]
seq(From, To, I) % list [From, From+I, ...,
```
#### Create task
```erlang
% Calling
spawn(fun () -> f(a1, ..., an) end) % is equivalent to
spawn(?MODULE, f, [a1, ..., an]) % but does not require exporting f
```
#### Receiving
```erlang
receive P1 when C1 -> E1; Pn when Cn -> En end
```
#### Registering
```erlang
 % register the process Pid under Name
register(Name, Pid)
unregister(Name): %unregister the process under Name;
registered() % list all names of registered processes
whereis(Name) %return pid registered under Name
```
