class Node{
    constructor(value){
        this.value=value
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
        this.size=0;
    }


    insert(value){
        let node=new Node(value)
        ++this.size
        if (!this.root){
            return this.root=node
        }else{
            let current=this.root
            while(true){
                if(value>current.value){
                    if(current.right){
                        current=current.right
                    }else{return current.right=node}
                }else{
                    if(current.left){
                        current=current.left
                    }else{return current.left=node}

                }
            }
        }
    }

    find(value){
        if (this.root===null) return null;
        let current=this.root;
        while (true){
           if (current===null) return null;
           if (value===current.value) return current;
            if (value>current.value){
                current=current.right
            }else{
                current=current.left
            }
        }
    }


}





let a=new  BinarySearchTree()
