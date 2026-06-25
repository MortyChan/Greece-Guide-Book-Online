(function(){
const root=document.querySelector("#phrases");
if(!root||typeof phrases==="undefined")return;
const greekTexts=["Γεια σας","Αντίο","Ευχαριστώ","Συγγνώμη","Είμαι φοιτητής φοιτήτρια από την Κίνα","Βοήθεια","Έχω χαθεί","Πού είναι η τουαλέτα","Μπορείτε να με βοηθήσετε","Πρέπει να επικοινωνήσω με την Κινεζική Πρεσβεία","Μιλάτε αγγλικά"];
let currentAudio=null,currentButton=null;
function ttsUrl(text){return "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=el&q="+encodeURIComponent(text)}
root.innerHTML=phrases.map(([cn,gr],index)=>{
const isDark=(Math.floor(index/2)+index%2)%2===0;
return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-audio="${ttsUrl(greekTexts[index]||gr)}" aria-label="\u64ad\u653e${cn}\u7684\u5e0c\u814a\u8bed\u53d1\u97f3">\u64ad\u653e</button></article>`;
}).join("");
function resetButton(button){if(button){button.classList.remove("is-playing");button.textContent="\u64ad\u653e"}}
function playPhrase(button){
const src=button.dataset.audio;
if(!src)return;
if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;resetButton(currentButton)}
if(currentButton===button){currentAudio=null;currentButton=null;return}
const audio=new Audio(src);
currentAudio=audio;currentButton=button;
button.classList.add("is-playing");button.textContent="\u64ad\u653e\u4e2d";
audio.addEventListener("ended",()=>{resetButton(button);if(currentAudio===audio){currentAudio=null;currentButton=null}});
audio.addEventListener("error",()=>{button.textContent="\u91cd\u8bd5";button.classList.remove("is-playing");if(currentAudio===audio){currentAudio=null;currentButton=null}});
audio.play().catch(()=>{button.textContent="\u91cd\u8bd5";button.classList.remove("is-playing");currentAudio=null;currentButton=null});
}
root.addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button)playPhrase(button)});
})();
