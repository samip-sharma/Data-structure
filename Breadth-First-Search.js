class Node {
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null
    }
}

class Tree {
    constructor(){
        this.root=null;
    }

    // Insert (value) {
    //     let newNode = new Node(value)
    //     let node = this.root
    //     if (!node) return this.root= newNode
    //     while (node.left || node.right){
    //         if (!node.left) {
    //             node.left = newNode
    //         }else if(!node.left){
    //             node.right = newNode
    //         }else{
    //             node
    //         }
    //     }
    // }

    BFS () {
        let node=this.root
        if(!node) return null
        let queue=[node]
        let visited=[]

        while(queue.length>0){
            node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            visited.push(node)
        }

        return visited
    }
}