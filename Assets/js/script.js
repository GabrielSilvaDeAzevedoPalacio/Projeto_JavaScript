const btnLogin = document.querySelector("#btn-Login");
const btnRegister = document.querySelector("#btn-Register");
const modalLogin = document.querySelector("#modalLogin");
const modalRegister = document.querySelector("#modalRegister");
const btnCancelLogin = document.querySelector("#btn-Cancel_Login")
const btnCancelRegister = document.querySelector("#btn-Cancel_Register")

btnLogin.addEventListener("click",(e) => {
   modalLogin.classList.remove("hide-modal");
   modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) => {
   modalRegister.classList.remove("hide-modal");
   modalregister.classList.add("show-modal");
})

btnCancelLogin.addEventListener("click", (e) => {
   modalLogin.classList.remove("show-modal")
   modalLogin.classList.add("hide-modal")
})

btnCancelRegister.addEventListener("click", (e) => {
   modalRegister.classList.remove("show-modal")
   modalRegister.classList.add("hide-modal")
})