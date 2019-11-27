function ucFirst(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    return value[0].toUpperCase() + value.substring(1);
}

function capitalize(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    var string = value.toLowerCase().split(' ').map(elem => ucFirst(elem)).join(' ');
    return string;
}

function camelCase(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    var string = value.toLowerCase().split(' ').map(elem => ucFirst(elem)).join('');
    return string;
}

function snake_case(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    var string = value.split(' ').join('_');
    return string;
}

function leet(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
}

function prop_access(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
}

function verlan(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    var reverse = value.split("").reverse().join('');
    reverse = yoda(reverse);
    return reverse;
}

function yoda(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
    var reverse  = value.split(' ').reverse().join(' ');
    return reverse;
}

function vig(value) {
    if(typeof value !== "string" || value.length === 0) return undefined;
}

console.log(ucFirst('hello world'));
console.log(capitalize('hello world'));
console.log(camelCase('hello world'));
console.log(snake_case('hello world'));
console.log(leet('anaconda'));
console.log(prop_access('test test'));
console.log(verlan('Hello world'));
console.log(yoda('Hello world'));
console.log(vig(''));