
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let signIn = document.getElementById("signUp")
let meniu = document.getElementById("meniu")

// user forma 

let form = document.querySelector('.form')

// validate 

function validate() {
    
    if (!username.value.trim()) {
        username.focus()
        username.style.borderColor = "red"
        return false
    } else {
        username.style.borderColor = " lightgrey"
    }
    if (!email.value.trim()) {
        email.focus()
        email.style.borderColor = "red"
        return false
    } else {
        email.style.borderColor = " lightgrey"
    }

    if (!password.value.trim()) {
        password.focus()
        password.style.borderColor = "red"
        return false
    } else {
        password.style.borderColor = " lightgrey"
    }

    return true
}


// btn click 

btn && btn.addEventListener("click", function (e) {
    e.preventDefault()
    validate()
    let user = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    
    fetch('https://auth-rg69.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)

    })
        .then(respons => respons.json())
        .then(user => { 
            if (user.message == "Failed! Username is already in use!") {
                signIn.click()  
                form.reset()
            }
             
        if (user.message == "Failed! Email is already in use!") {
            signIn.click() 
            form.reset()
        } else {
        localStorage.setItem('User', JSON.stringify(user))
       
    }


        
        })
        .catch(eror => console.log(eror))


    form.reset()
})
// Failed! Username is already in use!


