
function LinkedList(){
    this.head;
    this.add = function add(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
        }
        else{
            let temp = new Node();
            let current = this.head;
            while (current){
                temp = current;
                current = current.next;
            }
            temp.next = node;
        }
    }

    this.traverse = function traverse(){
        let nodeValues = [];
        let current = this.head;
        while(current){
            console.log(current.value);
            nodeValues.push(current.value);
            current = current.next;
        }
        return nodeValues;
    }
}

function Node(value){
    this.value = value;
    this.next;
}

module.exports = LinkedList; 