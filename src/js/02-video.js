import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const onTime = function (data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};
player.on('timeupdate', throttle(onTime, 1000));

const newTime = localStorage.getItem(CURRENT_TIME);
if (newTime) {
  player.setCurrentTime(newTime);
}

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.






//   const PLAYER_KEY = "videoplayer-current-time";

//   const playerTimeStorage = function(data) {
//     localStorage.setItem(PLAYER_KEY, data.seconds)
// }

// // Разбери документацию метода on()
// //  и начни отслеживать событие timeupdate - обновление времени воспроизведения.

// player.on('timeupdate', throttle(playerTimeStorage,1000));

// // Сохраняй время воспроизведения в локальное хранилище.
// //  Пусть ключом для хранилища будет строка "videoplayer-current-time".

// player.setCurrentTime(localStorage.getItem(PLAYER_KEY))
// .then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });