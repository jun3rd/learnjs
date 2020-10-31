"use strict";

console.log('it works')

var g = document.createElement('div');
g.setAttribute('class', 'temp');
g.innerHTML = "hello";

document.body.appendChild(g);
var g = 2
function mix(x) {
    g=3
    return x + g
}
console.log(mix(4))