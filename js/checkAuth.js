
function changeCurrentPage() {
    let auth = true
    const currentPage = window.location.href
    console.log(currentPage);
    if (currentPage == 'http://127.0.0.1:5500/index.html' && auth==false) {
        window.location.href = '/registration.html'
    }
    else if(currentPage != 'http://127.0.0.1:5500/index.html' && auth==true){
        window.location.href = '/index.html'
    }    
}


changeCurrentPage()