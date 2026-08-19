
function buatLari(butang) {
  butang.classList.add('is-running');
  
  const x = Math.random() * (window.innerWidth - 130);
  const y = Math.random() * (window.innerHeight - 60);
  
  butang.style.left = x + 'px';
  butang.style.top = y + 'px';
}


function tunjukEmoji() {
  const popup = document.getElementById('popup-emoji');
  popup.classList.add('show');
  
  setTimeout(() => {
    popup.classList.remove('show');
  }, 1500);
}


document.getElementById('p2-btn2').addEventListener('click', tunjukEmoji);


const btnLariList = [document.getElementById('p3-btn2'), document.getElementById('p4-btn2')];

btnLariList.forEach(butang => {
  butang.addEventListener('mouseover', () => buatLari(butang));
  butang.addEventListener('touchstart', (e) => {
    e.preventDefault();
    buatLari(butang);
  });
});

document.getElementById('p1-btn1').addEventListener('click', function() {
  tukarPage('page-1', 'page-2');
  
  // Mula mainkan lagu
  const audio = document.getElementById('bg-music');
  if (audio) {
    audio.play().catch(error => {
      console.log("Autoplay dihalang oleh browser:", error);
    });
  }
});
document.getElementById('p2-btn1').addEventListener('click', () => tukarPage('page-2', 'page-3'));
document.getElementById('p3-btn1').addEventListener('click', () => tukarPage('page-3', 'page-4'));
document.getElementById('p4-btn1').addEventListener('click', () => tukarPage('page-4', 'page-5'));

function tukarPage(pageSemasa, pageBaru) {
  document.getElementById(pageSemasa).classList.add('sorok');
  document.getElementById(pageBaru).classList.remove('sorok');
}
