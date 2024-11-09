class StringBuilder {
    constructor(initialValue) {
        this.initialValue = initialValue;
    }

    getValue() {
        return this.initialValue;
    }

    padStart(str) {
        return this.initialValue = str + this.initialValue;
    }

    padEnd(str) {
        return this.initialValue = this.initialValue + str;
    }   
    
    padBoth(str) {
        return this.initialValue = str + this.initialValue + str;
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