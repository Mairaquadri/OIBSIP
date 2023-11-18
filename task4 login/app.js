var heading = document.getElementById("heading")
var signup = document.getElementById("sign_up")
var signin = document.getElementById("sign_in")
var nameDiv = document.getElementById("name_div")
var create = document.getElementById("create")
var login = document.getElementById("login")
var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var string = " "






/////////////////////////////////////////function forsignup on signup button//////////////////////////////////
signup.addEventListener("click", function() {
    event.preventDefault();


    heading.innerHTML = "Sign Up"
    create.innerHTML = "create account"
    nameDiv.style.maxHeight = "65px"
    login.style.display = "none"
    create.style.display = "inline"
    signup.classList.remove("disable")
    signin.classList.add("disable")
})

/////////////////////////////////////////function forsignin on signin button//////////////////////////////////
signin.addEventListener("click", function() {
    event.preventDefault();

    heading.innerHTML = "Sign In"
    nameDiv.style.maxHeight = "0"
    create.style.display = "none"
    login.style.display = "inline"
    login.style.zIndex = "999"
    signup.classList.add("disable")
    signin.classList.remove("disable")

})



function createbutton() {
    event.preventDefault();
    /////////////////////function for set data in local storage  & direct sign page to sign in page/////////////////////////
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    if (name.value == "" || email.value == "" || password.value == "") {
        alert("pease fill all fields")

    } else {
        localStorage.setItem("name", name.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        alert("account han been created")
        signinwithbutton()

    }
    /////////////////////direct sign page to sign in page/////////////////////////

    function signinwithbutton() {
        var email = document.getElementById("email")

        heading.innerHTML = "Sign In"
        nameDiv.style.maxHeight = "0"
        create.style.display = "none"
        login.style.display = "inline"
        signup.classList.add("disable")
        signin.classList.remove("disable")
        name.value = ""
        email.value = ""
        password.value = ""


    }
}
/////////////////////function for get data in local storage /////////////////////////

function loginbutton() {
    event.preventDefault();

    var user_email = localStorage.getItem("email")
    var user_password = localStorage.getItem("password")

    if (user_email == email.value && user_password == password.value) {
        alert("wellcome")
        location.href = "./secured.html"

    } else if (email.value === "" || password.value === "") {
        alert("please filled all fields")

    } else {
        alert("incorrect email or password")
        email.value = ""
        password.value = ""
    }

}