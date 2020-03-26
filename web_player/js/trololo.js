var beginning = document.querySelector('.btn');
var trolls = document.querySelectorAll('.trolls');
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var stop = document.querySelector('.stop');
var video = document.querySelector('.video');
var volumeup = document.querySelector('.volp');
var volumedown = document.querySelector('.volm');
var h1 = document.querySelector('h1');
var player = document.querySelector ('.player')
var wrapper = document.querySelector ('.wrapper')
var seekbar = document.querySelector ('.seekbar')
var playing = false;

video.volume = 0.6;

function begin(){
  video.style.opacity = '100%';
  seekbar.style.opacity = '100%';
  player.style.opacity = '100%';
  h1.style.opacity = '100%';
  beginning.style.opacity = '0%';
  beginning.style.zIndex = '0' ;
  for(var i = 0; i < trolls.length; i++){
    trolls[i].style.opacity = '100%';
	trolls[i].style.animationPlayState = 'running';
  };
  
  if (playing == false){
    video.play();
    playing = true;
  }
};

play.addEventListener('click', function() {
  if(playing == false){
    video.play();
    playing = true;
  }
});

pause.addEventListener('click', function() {
  if(playing == true){
    video.pause();
	playing = false;
    
  }
});

stop.addEventListener('click', function() {
        video.pause();
        /*circleProgress.style.display = "none";*/
        playing = false;
        video.currentTime = 0;
    })

volumedown.addEventListener('click', function() {
  video.volume -= 0.2;
  });
  
volumeup.addEventListener('click', function() {
  video.volume += 0.2;
  });
  
video.ontimeupdate = function(){
  var percentage = ( video.currentTime / video.duration ) * 100;
  $(".seekbar span").css("width", percentage+"%");
};

$(".seekbar").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $(".seekbar").width();
    var percentage = ( left / totalWidth );
    var vidTime = video.duration * percentage;
    video.currentTime = vidTime;
});//click()