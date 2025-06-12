const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const envelope = document.getElementById('envelope');
const surpriseMessage = document.getElementById('surpriseMessage');
const surpriseBtn = document.getElementById('surpriseBtn');

openBtn.addEventListener('click', () => {
  envelope.classList.add('open');
  surpriseMessage.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  envelope.classList.remove('open');
  setTimeout(() => {
    surpriseMessage.style.display = 'block';
  }, 500);
});

surpriseBtn.addEventListener('click', () => {
  window.open('surpresa.html', '_blank');
});
