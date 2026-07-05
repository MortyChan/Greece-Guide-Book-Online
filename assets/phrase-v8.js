(function(){
const root=document.querySelector("#phrases");
if(!root||root.querySelector(".phrase-play")||typeof phrases==="undefined")return;
const phraseSpeechText=phrase=>phrase.replace(/\s*\([^)]*\)\s*/g,"").trim();
root.innerHTML=phrases.map(([cn,gr],index)=>{
const isDark=(Math.floor(index/2)+index%2)%2===0;
return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-speech="${phraseSpeechText(gr)}" aria-label="播放${cn}的希腊语发音">播放</button></article>`;
}).join("");
function playGreekPhrase(button){
const text=button.dataset.speech;
if(!("speechSynthesis" in window)||!text){button.textContent="不可用";setTimeout(()=>button.textContent="播放",1200);return}
speechSynthesis.cancel();
const utterance=new SpeechSynthesisUtterance(text),voices=speechSynthesis.getVoices();
utterance.voice=voices.find(voice=>voice.lang&&voice.lang.toLowerCase().startsWith("el"))||null;
utterance.lang="el-GR";utterance.rate=.86;utterance.pitch=1.02;
button.classList.add("is-playing");button.textContent="播放中";
utterance.onend=utterance.onerror=()=>{button.classList.remove("is-playing");button.textContent="播放"};
speechSynthesis.speak(utterance);
}
root.addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button)playGreekPhrase(button)});
})();
