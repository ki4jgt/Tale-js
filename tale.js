const page = document.getElementById("page")
const md = window.markdownit()
var book

String.prototype.out = function() {
    page.innerHTML += md.render(this.toString())
    hljs.highlightAll()
    page.scrollTop = page.scrollHeight;
}

async function load_book(url){
    await fetch(url)
    .then(response => response.json())
    .then(data => book = data)
    window.location.hash = "index"
}

function goto(page){
    window.location.hash = page
}

function clear(){
    page.innerHTML = ""
}

function background(url){
    document.body.style.backgroundImage = "url('" + url + "')"
}

function input(name, comment){
    page.innerHTML += "<input type = 'text' name = '" + name + "' placeholder = '" + comment + "' onkeyup = 'form_handler(event)'>";
    page.scrollTop = page.scrollHeight;
}

function set(key, value){
    localStorage.setItem(key, value);
}

function get(key){
    return localStorage.getItem(key);
}

window.onhashchange = function () {
    eval(book[window.location.hash.replace("#", "")])
}

function form_handler(event){
    if (event.key == "Enter"){
        set(event.target.name, event.target.value)
        event.target.placeholder = event.target.value
        event.target.setAttribute("disabled", true);
    }
}