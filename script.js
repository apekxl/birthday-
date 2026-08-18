// Function untuk buat Button 2 lari
function buatLari(butang) {
  butang.classList.add('is-running');
  
  const x = Math.random() * (window.innerWidth - 130);
  const y = Math.random() * (window.innerHeight - 60);
  
  butang.style.left = x + 'px';
  butang.style.top = y + 'px';
}

// Function tunjuk Pop-up Emoji 🥺
function tunjukEmoji() {
  const popup = document.getElementById('popup-emoji');
  popup.classList.add('show');
  
  setTimeout(() => {
    popup.classList.remove('show');
  }, 1500);
}

// 1. Target Button 2 kat Page 2 (Tak lari, cuma tekan keluar pop-up 🥺)
document.getElementById('p2-btn2').addEventListener('click', tunjukEmoji);

// 2. Target Button 2 kat Page 3 & Page 4 (Lari-lari)
const btnLariList = [document.getElementById('p3-btn2'), document.getElementById('p4-btn2')];

btnLariList.forEach(butang => {
  butang.addEventListener('mouseover', () => buatLari(butang));
  butang.addEventListener('touchstart', (e) => {
    e.preventDefault();
    buatLari(butang);
  });
});

// 3. System Navigasi Button 1 (Pindah ke page seterusnya)
document.getElementById('p1-btn1').addEventListener('click', () => tukarPage('page-1', 'page-2'));
document.getElementById('p2-btn1').addEventListener('click', () => tukarPage('page-2', 'page-3'));
document.getElementById('p3-btn1').addEventListener('click', () => tukarPage('page-3', 'page-4'));
document.getElementById('p4-btn1').addEventListener('click', () => tukarPage('page-4', 'page-5'));

function tukarPage(pageSemasa, pageBaru) {
  document.getElementById(pageSemasa).classList.add('sorok');
  document.getElementById(pageBaru).classList.remove('sorok');
}
