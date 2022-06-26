const userButton = document.getElementById("userButton");
const findButton = document.getElementById("findButton");

const userPanel = document.getElementById("userPanel");

userButton.addEventListener("click", ()=>{
    userPanel.classList.toggle("hidePanel");
    userButton.classList.toggle("clicked");
    
});