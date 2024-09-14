

var add_btn = document.getElementById("add_btn")

var popup_overlay = document.querySelector(".popup-overlay")

var popup_box = document.querySelector(".popup-box")

var saveBtn = document.getElementById("save_btn")

var cancelBtn = document.getElementById("cancel_btn")

add_btn.addEventListener("click",function(){

    popup_overlay.style.display="block";
    popup_box.style.display="block";

});

cancelBtn.addEventListener("click",function(event){

    event.preventDefault();
    popup_overlay.style.display="none";
    popup_box.style.display="none";
    
    document.getElementById("inputForm").reset();

})

saveBtn.addEventListener("click",function(event){

    event.preventDefault();
    
})


// selecting main-container, saveBtn, three input values

var container = document.querySelector(".container")

var saveBtn = document.getElementById("save_btn")

var bookTitle = document.getElementById("book-title-input")
var bookAuthor = document.getElementById("book-title-author")
var bookDesc = document.getElementById("book-description")

saveBtn.addEventListener("click",function(event){
    event.preventDefault();

    // field is emety fill it out
    if(!bookTitle.value || !bookAuthor.value || !bookDesc.value){
        alert("All fields are required!");
        return;
    }

    var div = document.createElement("div");

    div.setAttribute("class","child-container");

    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h3>${bookAuthor.value}</h3>
    <p>${bookDesc.value}</p>
    <button onclick="finish(event)">Delete</button>`

    container.append(div);
    
    popup_overlay.style.display="none";
    popup_box.style.display="none";

    document.getElementById("inputForm").reset();
})

function finish(event)
{
    event.target.parentElement.remove()
}