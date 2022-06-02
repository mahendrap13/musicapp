console.log("welcome to mahi")
// initialize the veriable
let songIndex= 0;
let 
audioElement = new Audio("2.mp3")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar')
let song=[
    { songName: "Jai Hanuman Gyan Gun Sagar" , filePath: "1.mp3" ,coverPath: "1.mp3"},
    { songName: " Baari by Bilal Saeed" , filePath: "2.mp3" ,coverPath: "2i.jpg"},
    { songName: " aashiq-hai-ye-chor r" , filePath: "3.mp3" ,coverPath: "3i.jpg"},
    { songName: "Lahore - Guru Randhawa" , filePath: "4.mp3" ,coverPath: "4i.jpg"},
    { songName: "haaye panjabi" , filePath: "6.mp3" ,coverPath: "6i.jpg"}
]
// AudioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play(); 
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        }
        else{
            audioElement.pause(); 
            masterPlay.classList.remove("fa-pause-circle")
            masterPlay.classList.add("fa-play-circle")
    }
    

})
// listen to Event
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value =progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
}

)
