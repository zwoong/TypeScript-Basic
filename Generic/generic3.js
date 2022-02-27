"use strict";
function helloArray(message) {
    return message[0];
}
helloArray(['Hello', 'World']);
helloArray(['Hello', 5]);
function helloTuple(message) {
    return message[0];
}
helloTuple(["Hello", "World"]);
helloTuple(["Hello", 5]);
