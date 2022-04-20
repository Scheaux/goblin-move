const goblin = document.getElementById('goblin');
const cells = document.getElementsByClassName('cell');
const hit = document.getElementById('hit');
const miss = document.getElementById('miss');

let score = 0;
let misses = 0;

cells[0].appendChild(goblin);

let clicked = false;
const whenClicked = () => {
  score += 1;
  hit.innerText = `Hit: ${score}`;
  clicked = true;
};

let prevIdx;
function position() {
  if (misses === 5) {
    clearInterval(intervalId);
    return;
  }
  if (prevIdx) cells[prevIdx].removeEventListener('click', whenClicked);
  let idx = Math.floor(Math.random() * cells.length);
  while (prevIdx === idx) {
    idx = Math.floor(Math.random() * cells.length);
  }
  cells[idx].appendChild(goblin);
  cells[idx].addEventListener('click', whenClicked, { once: true });
  prevIdx = idx;
  if (clicked === false) {
    misses += 1;
    miss.innerText = `Missed: ${misses}`;
  }
  clicked = false;
}

const intervalId = setInterval(position, 1000);
