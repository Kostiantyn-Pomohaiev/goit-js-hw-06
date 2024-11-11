class StringBuilder {
    #initialValue;
    constructor(initialValue) {
        this.#initialValue = initialValue;
    }

    getValue() {
        return this.#initialValue;
    }

    padStart(str) {
        this.#initialValue = str + this.#initialValue;
    }

    padEnd(str) {
        this.#initialValue = this.#initialValue + str;
    }   
    
    padBoth(str) {
        this.#initialValue = str + this.#initialValue + str;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="