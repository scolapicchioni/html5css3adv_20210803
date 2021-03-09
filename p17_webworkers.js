//worker
function add(n1=0,n2=0){
    return n1 + n2;
}
function subtract(n1=0,n2=0){
    return n1 - n2;
}
function multiply(n1=0,n2=0){
    return n1 * n2;
}
function divide(n1=0,n2=0){
    return n1 / n2;
}

onmessage = evt => {
    console.log(evt.data.command);
    console.log(evt.data.payload.param1);
    console.log(evt.data.payload.param2);
    let result;
    switch(evt.data.command){
        case 'add':
            result = add(evt.data.payload.param1, evt.data.payload.param2);
            break;
        case 'subtract':
            result = subtract(evt.data.payload.param1, evt.data.payload.param2);
            break;
        case 'multiply':
            result = multiply(evt.data.payload.param1, evt.data.payload.param2);
            break;
        case 'divide':
            result = divide(evt.data.payload.param1, evt.data.payload.param2);
            break;
        default:
            result = "OH NOES!";
            break;
    }
    postMessage({command: evt.data.command, result});
}
