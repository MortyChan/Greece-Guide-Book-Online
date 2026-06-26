(function(){
const warmHero=()=>{const image=new Image();image.decoding="async";image.src="assets/visuals/hero-greece-apple.png";image.onload=()=>document.body.classList.add("hero-hd-ready")};
if("requestIdleCallback" in window)requestIdleCallback(warmHero,{timeout:1600});else setTimeout(warmHero,900);
const root=document.querySelector("#phrases");
if(!root||typeof phrases==="undefined")return;
const audioFiles=["hello","goodbye","thanks","sorry","student-from-china","help","lost","toilet","can-you-help","embassy","english"];
const greekTexts=["Γεια σας","Αντίο","Ευχαριστώ","Συγγνώμη","Είμαι φοιτητής φοιτήτρια από την Κίνα","Βοήθεια","Έχω χαθεί","Πού είναι η τουαλέτα","Μπορείτε να με βοηθήσετε","Πρέπει να επικοινωνήσω με την Κινεζική Πρεσβεία","Μιλάτε αγγλικά"];
let currentAudio=null,currentButton=null;
root.innerHTML=phrases.map(([cn,gr],index)=>{
const isDark=(Math.floor(index/2)+index%2)%2===0;
const audio=`assets/audio/greek/${audioFiles[index]}.mp3`;
return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-audio="${audio}" data-audio-key="${audioFiles[index]}" data-speech="${greekTexts[index]||gr}" aria-label="播放${cn}的希腊语发音">播放</button></article>`;
}).join("");
function resetButton(button){if(button){button.classList.remove("is-playing");button.textContent="播放"}}
function speakFallback(button){
const text=button.dataset.speech;
if(!("speechSynthesis" in window)||!text){button.textContent="重试";button.classList.remove("is-playing");return}
speechSynthesis.cancel();
const utterance=new SpeechSynthesisUtterance(text);
utterance.lang="el-GR";utterance.rate=.9;
utterance.onend=()=>resetButton(button);
utterance.onerror=()=>{button.textContent="重试";button.classList.remove("is-playing")};
speechSynthesis.speak(utterance);
}
function playAudio(button,src){
const audio=new Audio(src);
let started=false;
const fallback=()=>{if(started)return;started=true;speakFallback(button)};
currentAudio=audio;currentButton=button;
button.classList.add("is-playing");button.textContent="播放中";
audio.addEventListener("playing",()=>{started=true});
audio.addEventListener("ended",()=>{resetButton(button);if(currentAudio===audio){currentAudio=null;currentButton=null}});
audio.addEventListener("error",fallback,{once:true});
audio.play().catch(fallback);
}
function playPhrase(button){
const src=button.dataset.audio;
if(!src)return;
if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;resetButton(currentButton)}
if(currentButton===button){currentAudio=null;currentButton=null;return}
playAudio(button,src);
}
root.addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button){event.preventDefault();event.stopImmediatePropagation();playPhrase(button)}},true);
})();
