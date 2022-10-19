import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const player = new Player('vimeo-player', {
//     id: '236203659',
//     width: 640,
//   });


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
  
  const storeCurrentTime = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  };
  
  player.on('timeupdate', throttle(storeCurrentTime, 1000));
  
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);







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