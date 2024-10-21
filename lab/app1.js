function validate(){
    var username=document.getElementById('uname').value;
    var password=document.getElementById('pswd').value;
    if(username !== "" && password!==""){
        if(username.length>=5 && password.length>=8){
            alert("Successful");
        }
        else{
            alert("Username>5 and Password>8")
        }
    }   
    else{
        alert("Please enter username and password")
    }
}