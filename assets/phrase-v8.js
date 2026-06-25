(function(){
const root=document.querySelector("#phrases");
if(!root||root.querySelector(".phrase-play")||typeof phrases==="undefined")return;
const phraseSpeechText=phrase=>phrase.replace(/\s*\([^)]*\)\s*/g,"").trim();
root.innerHTML=phrases.map(([cn,gr],index)=>{
const isDark=(Math.floor(index/2)+index%2)%2===0;
return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-speech="${phraseSpeechText(gr)}" aria-label="\u64ad\u653e${cn}\u7684\u5e0c\u814a\u8bed\u53d1\u97f3">\u64ad\u653e</button></article>`;
}).join("");
function playGreekPhrase(button){
const text=button.dataset.speech;
if(!("speechSynthesis" in window)||!text){button.textContent="\u4e0d\u53ef\u7528";setTimeout(()=>button.textContent="\u64ad\u653e",1200);return}
speechSynthesis.cancel();
const utterance=new SpeechSynthesisUtterance(text),voices=speechSynthesis.getVoices();
utterance.voice=voices.find(voice=>voice.lang&&voice.lang.toLowerCase().startsWith("el"))||null;
utterance.lang="el-GR";utterance.rate=.86;utterance.pitch=1.02;
button.classList.add("is-playing");button.textContent="\u64ad\u653e\u4e2d";
utterance.onend=utterance.onerror=()=>{button.classList.remove("is-playing");button.textContent="\u64ad\u653e"};
speechSynthesis.speak(utterance);
}
root.addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button)playGreekPhrase(button)});
})();
