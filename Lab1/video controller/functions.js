const video= document.getElementById("video");
const source = document.getElementById("videoSource");
const playlist= ["vid1.mp4","vid2.mp4"];
let currentVideo=0;

function loadvideo(index){
    if(index>= 0 && index <playlist.length){
        source.src=playlist[index];
        video.load();
        video.play();
    }
}


function playVideo(){
    video.play();
}

function pauseVideo(){
    video.pause();
}
function rePlay(){
    video.currentTime=0;
    video.pause();
}
function forward(){
    video.currentTime +=5;
}function fastForward(){
    video.currentTime +=10;
}

function back(){
    video.currentTime -=5;
}
function muteVideo(){
    video.muted= !video.muted
}
function changeSpeed(){
    video.playbackRate= document.getElementById("speedSlider").value
}
function prevVideo(){
if(currentVideo>0){
    currentVideo --;
    loadvideo(currentVideo);
}
}
function nextVideo(){
    if(currentVideo<playlist.length-1){
        currentVideo ++;
        loadvideo(currentVideo);
    }
}