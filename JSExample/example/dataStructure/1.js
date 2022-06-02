var head;
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function push (data)
{
    var newNode = new Node(data);
    newNode.next = head; 
    head = newNode;
}

function insertAfter(prevNode , data)
{
    if(prevNode== null){
        console.log( "The given previous node cannot be null");
        return ;
    }

    var newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.newNode = newNode;    
}


function append(data)
{
    var newNode = new Node(data);

    if (head== null)
    {
        head = new Node(data);
        return ;
    }

    newNode.next = null;
    var last = head;
    while (last.next != null)
    {
        last= last.next;
    }
    last.next=  newNode;
    return ;
}


function printList(){
    var temp = head;
    while  (temp !=  null)
    {
        console.log(temp.data + "->");
        temp = temp.next;
    }
}


 // Insert 6. So linked list becomes 6->NUllist
 append(6);
 
 // Insert 7 at the beginning. So linked list becomes
 // 7->6->NUllist
 push(7);

 // Insert 1 at the beginning. So linked list becomes
 // 1->7->6->NUllist
 push(1);

 // Insert 4 at the end. So linked list becomes
 // 1->7->6->4->NUllist
 append(4);

 // Insert 8, after 7. So linked list becomes
 // 1->7->8->6->4->NUllist
 insertAfter(head.next, 8);

 console.log("\nCreated Linked list is: ");
 printList();

