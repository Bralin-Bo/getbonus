let myip = '10.10.205.84'
let urlLogin = `http://${myip}:3000/auth/login-user`
let urlReg = `http://${myip}:3000/auth/registration-user`
let urlGetQr = `http://${myip}:3000/api/qr`
let urlGet = `http://${myip}:3000/`
// 
// git remote add origin https://github.com/Bralin-Bo/getbonus

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

async function login(url, email, pass) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: email,
            password: pass
        })
    }) 
    const data = await response.json()
    const token = data.token
    localStorage.setItem("token", token)
    console.log(data)
    return data
}
async function auth(){
    const inputs = document.querySelectorAll('.reg__input')
    const errorMsg = document.querySelector('#error')
    // if(!validateEmail(inputs[0].value)){
    //     errorMsg.textContent = 'Некорректный Email'
    //     return
    // }
    // if(inputs[1].value.length<=8){
    //     errorMsg.textContent = 'Слишком короткий пароль'
    //     return
    // } 

    const data = await login(urlLogin, inputs[0].value, inputs[1].value)
    log
    if (data.Boolean == false){
        errorMsg.textContent = data.message
        return
    }
}

const loginBtn = document.querySelector('.reg__btn')
loginBtn.addEventListener('click', ()=>{
    auth()
})

// async function registration(url, email, pass) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             username: email,
//             password: pass
//         })
//     }) 
//     const data = await response.json()
//     return data
// }
// async function signUp(){

// }
// const registrationBtn = document.querySelector('#regBtn')
// registrationBtn.addEventListener('click', ()=>{
//     auth()
// })



async function createQr(url, callback) {
    const res = await callback(urlLogin)
    const token = res.token
    
    
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    })
    const data = await response.json()
    console.log(data)
}

async function funcGet(url) {
    const response = await fetch(url, {
        method: "GET"

    })
    console.log(response.json())
}


// 192.168.31.137
// 192.168.1.16
// login(urlLogin)
// funcGet(urlGet)
// createQr(urlGetQr, login)