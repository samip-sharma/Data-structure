class Node{
     constructor(value){
         this.value=value
         this.next=null;
         this.prev=null;
     }
}


class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
        let node=new Node(value)
        if (this.length===0){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        return ++this.length
    }

    pop(){
        if (!this.head) return null;
        let temp=this.tail
        if (this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            let prev=temp.prev;
            this.tail=prev;
            prev.next=null;
            temp.prev=null;
        }
        --this.length
        return temp
    }

    shift(){
        if (!this.head) return null;
        let temp=this.head
        if (this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=temp.next
            this.head.prev=null;
            temp.next=null;
        }
        --this.length
        return temp
    }

    unshift(value){
        let node= new Node(value);
        if (!this.head){
            this.head=node
            this.tail=node
        }else{
       this.head.prev=node
       node.next=this.head
       this.head=node
        }
        return ++this.length
    }



}

let a= new DoublyLinkedList()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
a.push(5)
