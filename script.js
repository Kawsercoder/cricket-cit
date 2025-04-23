const heading1 = document.querySelector('.batsman');
const heading2 = document.querySelector('.bowler');
const heading3 = document.querySelector('.batting-score');
const heading4 = document.querySelector('.bowling-maiden-over');
    

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

button1.addEventListener('click', () => {
    heading1.textContent = 'Batsman-Shahid Afridi';
    heading1.style.color = 'red';
    heading1.style.fontSize = '2em';
    heading1.style.fontFamily = 'Arial, sans-serif';
    heading1.style.textAlign = 'center';
    heading1.style.marginTop = '20px';
});

button2.addEventListener('click', () => {
    heading2.textContent = 'Bowler-Wasim Akram';
    heading2.style.color = 'blue';
    heading2.style.fontSize = '2em';
    heading2.style.fontFamily = 'Arial, sans-serif';
    heading2.style.textAlign = 'center';
    heading2.style.marginTop = '20px';
});

button3.addEventListener('click', () => {
    heading3.textContent = 'Batting score-247';
    heading3.style.color = 'red';
    heading3.style.fontSize = '2em';
    heading3.style.fontFamily = 'Arial, sans-serif';
    heading3.style.textAlign = 'center';
    heading3.style.marginTop = '20px';
});

button4.addEventListener('click', () => {
    heading4.textContent = 'Bowling maiden over-3';
    heading4.style.color = 'blue';
    heading4.style.fontSize = '2em';
    heading4.style.fontFamily = 'Arial, sans-serif';
    heading4.style.textAlign = 'center';
    heading4.style.marginTop = '20px';
});