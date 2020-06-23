const drums = document.querySelectorAll('.drum');
//by clicking icons
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', (e) => {
    let stroke = e.target.className.split(" ")[1];
    playSound(stroke);
  })
}
//by using keys
document.addEventListener('keydown',(e) => {
  let stroke=e.key;
  playSound(stroke)
})
//sound-playing function
function playSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('snare.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('crash.mp3');
      audio.play();
      break;

    default:

  }
}
