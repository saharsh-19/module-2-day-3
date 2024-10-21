function sum(){
    var numb1=parseInt(document.getElementById('num1').value);
    var numb2=parseInt(document.getElementById('num2').value);
    var sum=numb1+numb2;
    var output=`output is ${sum}`
    document.getElementById('result').innerHTML=output
}
function diff(){
    var numb1=parseInt(document.getElementById('num1').value);
    var numb2=parseInt(document.getElementById('num2').value);
    var sum=numb1-numb2;
    var output=`output is ${sum}`
    document.getElementById('result').innerHTML=output
}
function prod(){
    var numb1=parseInt(document.getElementById('num1').value);
    var numb2=parseInt(document.getElementById('num2').value);
    var sum=numb1*numb2;
    var output=`output is ${sum}`
    document.getElementById('result').innerHTML=output
}
function div(){
    var numb1=parseInt(document.getElementById('num1').value);
    var numb2=parseInt(document.getElementById('num2').value);
    var sum=numb1/numb2;
    var output=`output is ${sum}`
    document.getElementById('result').innerHTML=output
}
//sum();

function welc(){
    var name=prompt("Enter username");
    var conf=confirm(`do you ${name} agree to our terms and conditions?`);
    if (conf==true){
        alert("welcome");
    }
    else{
        alert("you did not agree");
    }
}

//welc();