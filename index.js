class Node {
    constructor(value){
        this.value=value
        this.next=null;
    }
}


class SinglyLinkedList{
    constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
    }

    push(val){
        let newNode=new Node(val)
        if (this.head===null) {
            this.head=newNode
            this.tail=newNode 
        }else{
        let temp=this.tail
        this.tail.next=newNode
        this.tail=newNode
        }
        this.length++
        return this

    }

    pop(){
        if (this.head===null) return undefined;
        if (this.length===1) {
            let  temp=this.tail
            this.head=null;
            this.tail=null;
            this.length--
            return temp
        }
        let secondLast= this.getSecondLastNode()
        let temp= this.tail
        this.tail=secondLast
        secondLast.next=null
        this.length--
        return temp
    }

    getSecondLastNode(){
        let current=this.head
        let next=current.next
        while(next.next){
            current=next
            next=current.next
        }
        return current;
    }

    shift(){
        if (this.length===0) return undefined
        let temp=this.head
        this.head= temp.next
        this.length--
        if (this.length===0) this.tail=null;
        return temp
    }

    unshift(value){
        let newNode= new Node(value)
        if (this.length===0){
            this.head=newNode
            this.tail=newNode
        }else{
        let temp=this.head
        this.head=newNode
        newNode.next=temp
        }
        this.length++
        return this
    }
}

let a= new SinglyLinkedList()