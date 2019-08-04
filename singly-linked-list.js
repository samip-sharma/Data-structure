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
        let secondLast= this.getPreviousnode(this.length-1)
        let temp= this.tail
        this.tail=secondLast
        secondLast.next=null
        this.length--
        return temp
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
    get(index){
        if (this.length===0 || this.length <= index || index<0) return undefined
        let element=this.head
        let i =0
        while(i<index){    
           element=element.next
        i++ 
        }
        return element
    }

    set(index,val){
        let element=this.get(index)
        element.value=val 
        return element;
    }

    insert(index,val){
        if (index===0) return this.unshift(val)
        if (index===this.length-1) return this.push(val)
        let newNode= new Node(val)
        let temp=this.get(index)
        let previousNode= this.getPreviousnode(index)
        previousNode.next=newNode
        this.length++
        newNode.next=temp
        return this
    }


    getPreviousnode(index){
        if (index===0) return undefined
        if (index>=this.length) return undefined
        let current=this.head
        let next=current.next
        let i=1
        while(i<index){
            current=next
            next=current.next
            i++
        }
        return current;
    }



    remove(index){
        if (index===0) return this.shift()
        if (index=== this.length-1) return this.pop()
         if (index<0 || index>=this.length) return undefined;
        let previousNode=this.getPreviousnode(index)
        let temp=this.get(index)
        let next=temp.next
        previousNode.next=next
        this.length--
        return temp

    }


    reverse(){
        if (this.length===0) return undefined;
        let node=this.head
        this.head=this.tail
        this.tail=node
        let next;
        let previous=null;
        for(let i=0;i<this.length;++i){
            next=node.next
            node.next=previous
            previous=node;
            node=next;
           
        }
        return this
        
    }

    to_arr(){
        let current=this.head
        let arr=[current.value]

        for(let i=0;i<this.length-1;++i){
             current= current.next
            arr.push(current.value)
        }
        return arr
    }
}

let a= new SinglyLinkedList()
a.push(0)
a.push(1)
a.push(2)
a.push(3)