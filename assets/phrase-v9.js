(function(){
const warmHero=()=>{const image=new Image();image.decoding="async";image.src="assets/visuals/hero-greece-apple.png";image.onload=()=>document.body.classList.add("hero-hd-ready")};
if("requestIdleCallback" in window)requestIdleCallback(warmHero,{timeout:1600});else setTimeout(warmHero,900);
const root=document.querySelector("#phrases");
if(!root||typeof phrases==="undefined")return;
const audioFiles=["hello","goodbye","thanks","sorry","student-from-china","help","lost","toilet","can-you-help","embassy","english"];
const greekTexts=["Γεια σας","Αντίο","Ευχαριστώ","Συγγνώμη","Είμαι φοιτητής φοιτήτρια από την Κίνα","Βοήθεια","Έχω χαθεί","Πού είναι η τουαλέτα","Μπορείτε να με βοηθήσετε","Πρέπει να επικοινωνήσω με την Κινεζική Πρεσβεία","Μιλάτε αγγλικά"];
let currentAudio=null,currentButton=null;
function ttsUrl(text){return "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=el&q="+encodeURIComponent(text)}
root.innerHTML=phrases.map(([cn,gr],index)=>{
const isDark=(Math.floor(index/2)+index%2)%2===0;
const audio=`assets/audio/greek/${audioFiles[index]}.mp3`;
return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-audio="${audio}" data-tts="${ttsUrl(greekTexts[index]||gr)}" data-speech="${greekTexts[index]||gr}" aria-label="播放${cn}的希腊语发音">播放</button></article>`;
}).join("");
function resetButton(button){if(button){button.classList.remove("is-playing");button.textContent="播放"}}
function speakFallback(button){
const text=button.dataset.speech;
if(!("speechSynthesis" in window)||!text){button.textContent="重试";button.classList.remove("is-playing");return}
speechSynthesis.cancel();
const utterance=new SpeechSynthesisUtterance(text);
utterance.lang="el-GR";
utterance.rate=.9;
utterance.onend=()=>resetButton(button);
utterance.onerror=()=>{button.textContent="重试";button.classList.remove("is-playing")};
speechSynthesis.speak(utterance);
}
function playAudio(button,src,allowFallback){
const audio=new Audio(src);
let settled=false;
const fallback=()=>{if(settled)return;settled=true;if(allowFallback&&button.dataset.tts&&src!==button.dataset.tts){audio.pause();playAudio(button,button.dataset.tts,false)}else speakFallback(button)};
const fallbackTimer=allowFallback?setTimeout(fallback,1000):null;
currentAudio=audio;currentButton=button;
button.classList.add("is-playing");button.textContent="播放中";
audio.addEventListener("playing",()=>{settled=true;if(fallbackTimer)clearTimeout(fallbackTimer)});
audio.addEventListener("canplay",()=>{settled=true;if(fallbackTimer)clearTimeout(fallbackTimer)});
audio.addEventListener("ended",()=>{if(fallbackTimer)clearTimeout(fallbackTimer);resetButton(button);if(currentAudio===audio){currentAudio=null;currentButton=null}});
audio.addEventListener("error",fallback);
audio.play().catch(fallback);
}
async function playPhrase(button){
const src=button.dataset.audio;
if(!src)return;
if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;resetButton(currentButton)}
if(currentButton===button){currentAudio=null;currentButton=null;return}
try{
const probe=await fetch(src,{method:"HEAD",cache:"no-store"});
if(!probe.ok){playAudio(button,button.dataset.tts||src,false);return}
}catch(error){
if(button.dataset.tts){playAudio(button,button.dataset.tts,false);return}
}
playAudio(button,src,false);
}
root.addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button){event.preventDefault();event.stopImmediatePropagation();playPhrase(button)}},true);
})();
