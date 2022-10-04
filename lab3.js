function addRuFields(){
    let text=document.getElementById("new-field-ru").value;
    let parent=document.getElementById("form-ru");
    let newItem=document.createElement("input");
    newItem.placeholder=text;

    parent.appendChild(newItem);
}

function addEnFields(){
    let text=document.getElementById("new-field-en").value;
    let parent=document.getElementById("form-en");
    let newItem=document.createElement("input");
    newItem.placeholder=text;

    parent.appendChild(newItem);
}

function switchToEn(){
    document.getElementById("ru").style.display="none";
    document.getElementById("en").style.display="block";
}

function switchToRu(){
    document.getElementById("en").style.display="none";
    document.getElementById("ru").style.display="block";
}

function authRu() {
    let userName = prompt('Введите Ваше имя:')
    let validUserName = /\S/;
    if(!validUserName.test(userName)){
        alert("Пустое имя пользователя");
        return;
    }

    let text = document.getElementById("hello-ru");
    text.innerHTML="Привет, "+userName+"!";

    document.getElementById("btnLoginRu").style.display="none";
    document.getElementById("btnLogOutRu").style.display="block";
}

function logOutRu(){
    let text = document.getElementById("hello-ru");
    text.innerHTML="Привет, пользователь!";

    document.getElementById("btnLoginRu").style.display="block";
    document.getElementById("btnLogOutRu").style.display="none";
}

function authEn() {
    let userName = prompt('Enter Your name:')
    let validUserName = /\S/;
    if(!validUserName.test(userName)){
        alert("Empty username");
        return;
    }

    let text = document.getElementById("hello-en");
    text.innerHTML="Hello, "+userName+"!";

    document.getElementById("btnLoginEn").style.display="none";
    document.getElementById("btnLogOutEn").style.display="block";
}

function logOutEn(){
    let text = document.getElementById("hello-en");
    text.innerHTML="Hello, user!";

    document.getElementById("btnLoginEn").style.display="block";
    document.getElementById("btnLogOutEn").style.display="none";
}