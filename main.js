const soundFolder = "Sounds/";

const soundList = [
  {key: "a", fileName:"clap.wav"},
  {key: "s", fileName: "hihat.wav"},
  {key: "d", fileName: "kick.wav"},
  {key: "f", fileName: "openhat.wav"},
  {key: "g", fileName: "ride.wav"},
  {key: "h", fileName: "snare.wav"},
  {key: "j", fileName: "tink.wav"},
  {key: "k", fileName: "tom.wav"},
]

const drumkit = document.getElementById("drumkit")

function drum(folder,fileInfo){
    const button = document.createElement("button")
    button.textContent = fileInfo.fileName

    const sound = new Audio(folder +  fileInfo.fileName)

    button.addEventListener("click",()=> playSound(sound))
    return button
}

const drumkitElements = soundList.map((soundInfo)=>drum(soundFolder,soundInfo))
drumkit.append(...drumkitElements)

window.addEventListener("keydown",(eve)=>{
    const soundFile = soundList.find((soundInfo)=>soundInfo.key === eve.key)
    if(!soundFile) return;

    const sound = new Audio(soundFolder + soundFile.fileName)
    playSound(sound)
})

function playSound(audioElement) {
  audioElement.currentTime = 0
  audioElement.pause()
  audioElement.play()
}