const mailBox = document.getElementById('mailBox');
const openBtn = document.getElementById('openBtn');
const styleBtn = document.getElementById('styleBtn');

let isOpen = false;
let designIndex = 0;
const designs = [
  'mail1.png',
  'mail2.png',
  'mail3.png'
];

// set the default background initially
mailBox.style.backgroundImage = `url('${designs[designIndex]}')`;

openBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  mailBox.classList.toggle('open', isOpen);
  openBtn.textContent = isOpen ? 'Close Mail' : 'Open Mail';
});

styleBtn.addEventListener('click', () => {
  designIndex = (designIndex + 1) % designs.length;
  mailBox.style.backgroundImage = `url('${designs[designIndex]}')`;
});
