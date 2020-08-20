class Stack {
    constructor(){
        this.values = [];
    }

    push_element = (el) => this.values.push(el);

    pop_element = (el) => this.values.pop();

    get_length = () => this.values.length;

}

let st = new Stack();
st.push_element(1);
st.push_element(2);
st.push_element(3);
st.push_element(4);
st.push_element(5);
console.log(st.get_length());
st.pop_element();
console.log(st.get_length());