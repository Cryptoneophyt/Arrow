'use string';
let myArray = ['001', '002', '003'];
myArray = myArray.map((item) => {
    return `<div>${item}</div>`
})
document.getElementById("arrays").innerHTML = myArray.join('');
function ArrayPopMethod() {
    myArray.pop();
    document.getElementById("arrays").innerHTML = myArray.join('');
}
