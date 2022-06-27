const userButton = document.getElementById("userButton");
const findButton = document.getElementById("findButton");
const addUserButton = document.getElementById("addUserButton");
const removeUserButton = document.getElementById("removeUserButton");
const searchUserButton = document.getElementById("searchUserButton");

const whenAdd = document.getElementById("whenAdd");
const whenDelete = document.getElementById("whenDelete");
const whenFind = document.getElementById("whenFind");

const userPanel = document.getElementById("userPanel");
const findPanel = document.getElementById("findPanel");
const formularioAdd = document.getElementById("formularioAdd");
const formularioRemove = document.getElementById("formularioRemove");
const formularioFind = document.getElementById("formularioFind");

let userMenu = false;
let findMenu = false;
let sellMenu = false;
let addUserMenu = false;
let deleteUserMenu = false;
let findUserMenu = false;


function hidePossibleSubMenu(menuMaster){
    if(menuMaster == "user"){
        if(addUserMenu){
            formularioAdd.classList.toggle("hidePanel");
            addUserButton.classList.toggle("clicked");
            addUserMenu = false;
        }
        else if(deleteUserMenu){
            formularioRemove.classList.toggle("hidePanel");
            removeUserButton.classList.toggle("clicked");
            deleteUserMenu = false;
        }
        else if(findUserMenu){
            formularioFind.classList.toggle("hidePanel");
            searchUserButton.classList.toggle("clicked");
            findUserMenu = false;
        }
    }
    else if(menuMaster == "find"){

    }
    else if(menuMaster == "sell"){

    }
}

function hidePossibleMasterMenu(){
    if(userMenu){
        hidePossibleSubMenu("user");
        userPanel.classList.toggle("hidePanel");
        userButton.classList.toggle("clicked");
        userMenu = false;
    }
    else if(findMenu){        
        hidePossibleSubMenu("find");        
        findPanel.classList.toggle("hidePanel");
        findButton.classList.toggle("clicked");
        findMenu = false;
    }
    else if(sellMenu){
        hidePossibleSubMenu("sell");
        sellMenu = false;
    }
}

userButton.addEventListener("click", ()=>{
    hidePossibleMasterMenu();
    userMenu = true;
    userPanel.classList.toggle("hidePanel");
    userButton.classList.toggle("clicked");
})

addUserButton.addEventListener("click", ()=>{
    hidePossibleSubMenu("user");
    formularioAdd.classList.toggle("hidePanel");
    addUserButton.classList.toggle("clicked");
    addUserMenu = true;

})

removeUserButton.addEventListener("click", ()=>{
    hidePossibleSubMenu("user");
    formularioRemove.classList.toggle("hidePanel");
    removeUserButton.classList.toggle("clicked");
    deleteUserMenu = true;
})

searchUserButton.addEventListener("click", ()=>{
    hidePossibleSubMenu("user");
    formularioFind.classList.toggle("hidePanel");
    searchUserButton.classList.toggle("clicked");
    findUserMenu = true;
})
findButton.addEventListener('click', ()=>{
    hidePossibleMasterMenu();
    findMenu = true;
    findPanel.classList.toggle("hidePanel");
    findButton.classList.toggle("clicked");
})