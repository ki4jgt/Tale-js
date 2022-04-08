const page = document.getElementById("page")
const md = window.markdownit()
var book

String.prototype.out = function() {
    page.innerHTML += md.render(this.toString())
    hljs.highlightAll()
}

async function load_book(url){
    await fetch(url)
    .then(response => response.json())
    .then(data => book = data)
    window.location.hash = "index"
    console.log(book)
}

function clear(){
    page.innerHTML = ""
}

function background(url){
    document.body.style.backgroundImage = "url('" + url + "')"
}

function set(key, value){
    localStorage.setItem(key, value);
}

function get(key){
    return localStorage.getItem(key);
}

function goto(page){
    window.location.hash = page
}

window.onhashchange = function () {
    eval(book[window.location.hash.replace("#", "")])
}