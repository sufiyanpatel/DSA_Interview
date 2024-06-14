class Stack {
    constructor(){
        this.stack = [];
    }

    push(value){
        return this.stack.push(value);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    clear(){
        return this.stack = [];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }

    printStack(){
        let str = "";
        for(let i = 0; i < this.stack.length; i++){
            str += this.stack[i]
        }
        return str;
    }
}

// usage example
let myStack = new Stack();
myStack.push(5);
myStack.push(3);
myStack.push(2);
myStack.pop();
console.log(myStack.printStack());