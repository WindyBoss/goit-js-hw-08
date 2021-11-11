const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Vimeo.Player(iframe);
let currentVideoTime = {};

pageReset();

player.on('timeupdate', throttle((
  seconds,
) => {
  currentVideoTime = seconds;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentVideoTime));
}, 1000));

function pageReset() {

  const takenVideoTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (takenVideoTime !== null) {
  player.setCurrentTime(takenVideoTime.seconds);
  }
}

