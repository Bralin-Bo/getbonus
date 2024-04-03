
const historybtn = document.querySelector('.profile-history__btn')
const historyclose = document.querySelector('.history__close')
const history = document.querySelector('.history')

const btns = document.querySelectorAll('.nav__item')
const bonusPage = document.querySelector('.main__wrapper')
const qrPage = document.querySelector('.qr')
const profilePage = document.querySelector('.profile')

historybtn.addEventListener('click', ()=>{
    profilePage.classList.add('hide')
    history.classList.remove('hide')
})
historyclose.addEventListener('click', ()=>{
    profilePage.classList.remove('hide')
    history.classList.add('hide')
})

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if(index == 0){
            bonusPage.classList.remove('hide')
            qrPage.classList.add('hide')
            profilePage.classList.add('hide')
        }
        else if(index==1){
            bonusPage.classList.add('hide')
            qrPage.classList.remove('hide')
            profilePage.classList.add('hide')
        }
        else if(index==2){
            bonusPage.classList.add('hide')
            qrPage.classList.add('hide')
            profilePage.classList.remove('hide')
        }
    });
});

