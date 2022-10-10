function addFields(){
    let text=document.getElementById("new-field").value;
    let parent=document.getElementsByClassName("form-style")[0];
    let newItem=document.createElement("input");
    newItem.placeholder=text;

    parent.appendChild(newItem);
}

let userName="пользователь";
let curLocal="ru";

let local = {
    "ru":{
        "header":"Форма",
        "btn-change-local":"En Version",
        "btn-login":"Войти",
        "btn-logout":"Выйти",
        "hello":"Привет, ",
        "first-field":"Первое поле:",
        "second-field":"Второе поле:",
        "new-field":"Плейсхолдер для нового поля:",
        "btn-new-field":"Добавить поле",
    },

    "en":{
        "header":"Form",
        "btn-change-local":"Ru Version",
        "btn-login":"Auth",
        "btn-logout":"LogOut",
        "hello":"Hello, ",
        "first-field":"First field:",
        "second-field":"Second field:",
        "new-field":"Placeholder for new field:",
        "btn-new-field":"Add field",
    },
};

function localize() {

    if(curLocal=="ru"){
        curLocal="en";
        if(userName=="пользователь"){
            userName="user";
        }
    }else{
        curLocal="ru";
        if(userName=="user"){
            userName="пользователь";
        }
    }

    let elements=document
        .querySelectorAll("[id]")
        .forEach(translateElement)

}

function translateElement(element) {
    let key=element.getAttribute("id");

    if(key=="hello"){
        element.innerHTML = local[curLocal][key] + userName + "!";
    }else {
        element.innerHTML = local[curLocal][key];
    }
}

function auth() {
    let mes=""

    if(curLocal=="ru")
    {
        mes="Введите Ваше имя:"
    }else{
        mes="Enter your name:"
    }

    userName = prompt(mes)

    let validUserName = /\S/;
    if(!validUserName.test(userName)){

        if(curLocal=="ru") {
            alert("Пустое имя пользователя");
            return;
        }

        if(curLocal=="en"){
            alert("Empty username");
            return;
        }
    }

    let text = document.getElementById("hello");

    if(curLocal=="ru") {
        text.innerHTML = "Привет, " + userName + "!";
    }

    if(curLocal=="en") {
        text.innerHTML = "Hello, " + userName + "!";
    }

    document.getElementById("btn-login").style.display="none";
    document.getElementById("btn-logout").style.display="block";
}

function logOut(){
    let text = document.getElementById("hello");

    if(curLocal=="ru") {

        userName="пользователь"
        text.innerHTML="Привет, "+userName+"!";
    }

    if(curLocal=="en") {

        userName="user"
        text.innerHTML="Hello, "+userName+ "!";
    }

    document.getElementById("btn-login").style.display="block";
    document.getElementById("btn-logout").style.display="none";
}

