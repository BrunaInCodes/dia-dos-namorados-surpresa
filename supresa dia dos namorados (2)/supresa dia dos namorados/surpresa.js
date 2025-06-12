function criarCora() {
  const cora = document.createElement('div');
  cora.classList.add('cora');
  cora.style.left = Math.random() * 100 + 'vw';
  cora.style.animationDuration = 3 + Math.random() * 3 + 's';
  cora.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('chuva').appendChild(cora);

  setTimeout(() => {
    cora.remove();
  }, 8000);
}

setInterval(criarCora, 200);


const imgs = document.getElementById("img"); //pega as imagens de html
const img = document.querySelectorAll("#img");

let idx = 0;

function carrosel(){
  idx++;

  if(idx > img.length - 1) {
    idx = 0;
}

imgs.style.transform = 'translateX(${-idx * 500}px)';
}

setInterval(carrosel, 1800);
