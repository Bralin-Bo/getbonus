let myip = '192.168.31.137'
let urlLogin = `http://localhost:1313/auth/login-user`
let urlReg = `http://localhost:1313/auth/registration-user`
let urlGetQr = `http://localhost:1313/api/qr`
let urlGet = `http://localhost:1313/`
// 
// git remote add origin https://github.com/Bralin-Bo/getbonus

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

let isAuth;
const auth = localStorage.getItem('token')
console.log(auth);
if (auth == null) {
    isAuth = false
}
else{
    isAuth = true
}
function changeCurrentPage() {
    const currentPage = window.location.href
    // const pageURL = 'https://bralin-bo.github.io/getbonus/index.html'
    const pageURL = 'http://127.0.0.1:5500/'
    const pageURLIndex = 'http://127.0.0.1:5500/index.html'
    console.log(currentPage);
    if (currentPage == pageURL && isAuth==false || currentPage == pageURLIndex && isAuth==false) {
        window.location.href = '/registration.html'
    }
    else if(currentPage != pageURL && isAuth==true || currentPage != pageURLIndex && isAuth==true){
        window.location.href = '/'
    }    
}
// changeCurrentPage()


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
async function doAuth(){
    const inputs = document.querySelectorAll('.authInputs')
    const errorMsg = document.querySelector('#error')
    if(!validateEmail(inputs[0].value)){
        errorMsg.textContent = 'Некорректный Email'
        return
    }
    if(inputs[1].value.length<=8){
        errorMsg.textContent = 'Слишком короткий пароль'
        return
    } 

    const data = await login(urlLogin, inputs[0].value, inputs[1].value)
    if (data.Boolean == false){
        errorMsg.textContent = data.message
        return
    }
}
const loginBtn = document.querySelector('#authBtn')
// if (loginBtn === undefined) {
    // loginBtn.addEventListener('click', ()=>{
    //     doAuth()
    // })   
// }

async function registration(url, email, fullname, pass) {
    console.log('reg');
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: email,
            fullname: fullname,
            password: pass
        })
    }) 
    const data = await response.json()
    console.log(data);
    return data
}
async function signUp(){
    const regInputs = document.querySelectorAll('.regInputs')
    const errorMsg = document.querySelector('#error')
    if(!validateEmail(regInputs[0].value)){
        errorMsg.textContent = 'Некорректный Email'
        return
    }
    if (regInputs[1].value.trim().length === 0) {
        errorMsg.textContent = 'Введите свое ФИО'
        return
    }
    if(regInputs[2].value.length<=8){
        errorMsg.textContent = 'Слишком короткий пароль'
        return
    } 
    const data = await registration(urlReg, regInputs[0].value, regInputs[1].value, regInputs[2].value)
    console.log(data);
    if (data.Boolean == false){
        errorMsg.textContent = data.message
        return
    }
}
const registrationBtn = document.querySelector('#regBtn')
// registrationBtn.addEventListener('click', ()=>{
//     signUp()
// })



async function createQr(url, auth) {
    const token = auth
    console.log(token);
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



const qrBtn = document.querySelector('#qrBtn')
// if (qrBtn === undefined) {
    qrBtn.addEventListener('click', ()=>{
        createQr(urlGetQr, auth)
    })
// }




// 192.168.31.137
// 192.168.1.16
// login(urlLogin)
// funcGet(urlGet)
// createQr(urlGetQr, login)