const input = document.querySelector('input');
const list = document.querySelector('#list');
const add = document.querySelector('#add');
const have = document.querySelector('#have');

let item =() => {
    if (input.value === "") {
        alert("Please enter your item name ");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
}
add.addEventListener('click', () => {
    item() ;
    input.value ="";
    savedatalist();
    savedatahave();
})
input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        item() ;
        input.value ="";
    }
    savedatalist();
    savedatahave();
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        have.appendChild(e.target);
        let div = document.createElement("div");
        div.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
        div.classList.add("tick");
        e.target.insertAdjacentElement('afterbegin',div);
        savedatalist();
        savedatahave();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedatalist();
        savedatahave();
    }
})


have.addEventListener('click', (e) => {
    if (e.target.tagName === "LI" && e.target.querySelector(".tick")) {
        list.appendChild(e.target);
        e.target.querySelector(".tick").remove();
        savedatalist();
        savedatahave();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedatalist();
        savedatahave();
    }
})
setInterval( () => {
if (have.childElementCount == 0) {
    have.style.border = "none";
}
else {
    have.style.borderTop = " 1.5px dashed rgba(255, 255, 255, .7) ";
}
},1);

function savedatalist() {
    localStorage.setItem('datalist',list.innerHTML);
}
function savedatahave() {
    localStorage.setItem('datahave',have.innerHTML);
}
function showdatalist() {
    list.innerHTML = localStorage.getItem('datalist');
}
function showdatahave() {
    have.innerHTML = localStorage.getItem('datahave');

}
showdatalist();
showdatahave();
