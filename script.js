const fotoKecil = document.getElementById('fotoKecil');
const popupFoto = document.getElementById('popupFoto');
const fotoClose = document.getElementById('closeFoto');
fotoKecil.addEventListener('click', () => {
    popupFoto.classList.add('active');

    for(let i = 0; i < 100; i++){
        let love = document.createElement('div');
        love.classList.add('love');
        love.innerHTML = '❤️';

        love.style.left = Math.random() * 100 + 'vw';
        love.style.top = "50%";
        document.body.appendChild(love);
        setTimeout(() =>{
            love.remove();
        },3000);
    }
})

fotoClose.addEventListener('click', (e) => {
    e.stopPropagation();
    popupFoto.classList.remove('active');
})
    popupFoto.addEventListener('click', () =>{
        popupFoto.classList.remove('active')
})


const btn = document.getElementById('showMessage');
const popupMessage = document.getElementById('popupMessage');
const closeBtn = document.getElementById('closePopup');

btn.addEventListener('click', () =>{
    popupMessage.classList.add('active');
    btn.style.backgroundColor = '#0d47a1';
})
closeBtn.addEventListener('click', ()=>{
    popupMessage.classList.remove('active');
    btn.style.backgroundColor = '#5DF8D8';
})

const audio = document.getElementById('bg-music');
let audioPlayed = false;

document.body.addEventListener('click', () => {
    if (!audioPlayed && audio) {
        audio.play().catch(e => console.log("Audio autoplay blocked or failed.", e));
        audioPlayed = true;
    }
});