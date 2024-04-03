async function login(url) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: "samvel",
            password: "samvel"
        })
    }) 
    const data = await response.json()
    return data

}

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
let myip = '10.10.205.84'
let urlLogin = `http://${myip}:3000/auth/login-user`
let urlGetQr = `http://${myip}:3000/api/qr`
let urlGet = `http://${myip}:3000/`
// login(urlLogin)
// funcGet(urlGet)
createQr(urlGetQr, login)