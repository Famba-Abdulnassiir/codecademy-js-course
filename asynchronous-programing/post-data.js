//This code is to mimic data posting and gotten from some old project that was about fetch API it is a signup page that posts details to the API.
//Note: Read thru the Documentation of the API you are to fetch before you start off. and also ensure its tested well and ready for consumption use tools like POSTMan for testing it.


const email = document.getElementById("email")
const first_name = document.getElementById("first_name")
const last_name = document.getElementById("last_name")
const password = document.getElementById("password")

function signup(){
    fetch("https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signup",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            "email_address":email.value,
            "first_name":first_name.value,
            "last_name":last_name.value,
            "password":password.value,
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.status === 201){
            document.getElementById("errMessage").style.color="green"
            document.getElementById("errMessage").innerHTML = "Successfully created... Thank you"
            window.location.replace("home.html")
        } else {
            document.getElementById("errMessage").style.color="red"
            document.getElementById("errMessage").innerHTML = `${data.error}`
        }
    })
}