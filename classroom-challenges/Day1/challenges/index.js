// const userName = document.querySelector("#uName");
// submitButton.addEventListener("click", checkUserName);
// const arr = ["technoKid997", "heyGurl94", "taebae55", "witchita"];

// function checkUserName = () => {
// const check = arr.includes(userName);
// const userInput = document.getElementById("input").value;
// document.getElementById('feedback').innerTest = "exists"
// }

function searchuserName() {
    let result = document.getElementById("search").nodeValue.toLowerCase();
    console.log(result);
let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];
let para = document.getElementById("paragraph");
filterUserList= username.filter((user)) => 
    user.toLowerCase().includes(result);
filteredUserList.forEach((user)=> {
    para.innerText = user;

}
)
