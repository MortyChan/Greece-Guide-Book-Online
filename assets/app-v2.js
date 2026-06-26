const days=[
{date:"7月13日-14日",city:"北京-上海-雅典",guide:"出发段",status:"已保留",tags:["机票","17:00出发"],events:[["21:25-23:35","北京大兴国际机场","北京-上海 HO1254。","7月13日下午17:00出发"],["01:10-07:45","上海-雅典","上海-雅典 HO1657，D+1 抵达。","落地后办理入境与交通衔接"]]},
{date:"7月14日",city:"旧模板：维也纳",guide:"李金沅",status:"待更新希腊内容",tags:["旧模板","待修订"],events:[["07:45","Exe Vienna","入住酒店，购买周票。","该日程为旧模板，先保留格式"],["14:30-16:00","智库 / 博物馆","分组交流与参访。","后续替换为希腊调研安排"]]},
{date:"7月15日",city:"旧模板：维也纳",guide:"宗琦玥",status:"待更新希腊内容",tags:["座谈","旧模板"],events:[["09:00-10:30","中车株机欧洲研发中心","参观实验室并座谈。","记录：沈诗晨"],["16:30-18:00","中兴通讯奥地利公司","与公司团队座谈。","问卷设计注意专业性"]]},
{date:"7月16日",city:"旧模板：维也纳",guide:"张佳敏",status:"待更新希腊内容",tags:["带护照","提前30min"],events:[["11:00-13:00","联合国工业发展组织","座谈并参观联合国。","必须携带护照，提前 30min 安检"],["15:45-17:00","国会大厦","安检、讲解参观。","必须携带护照，至少提前 20min 到"]]},
{date:"7月17日",city:"旧模板：布拉格",guide:"王一竣",status:"待更新希腊内容",tags:["交通票","旧模板"],events:[["10:39-14:39","维也纳中央车站-布拉格","乘坐火车前往布拉格。","买 1 张 72 小时、2 张 24 小时车票"],["17:30-18:30","分组交流","新华社布拉格分社记者餐叙 / S1 艺术空间交流。","后续替换"]]},
{date:"7月18日",city:"旧模板：布拉格",guide:"刘奕萱",status:"待更新希腊内容",tags:["宣讲","旧模板"],events:[["09:30-11:30","布拉格中国商贸城","与负责人开展座谈。","记录：杨恩硕"],["19:00-21:30","Café Montmartre","与青年交流，开展宣讲。","已预定"]]},
{date:"7月19日-22日",city:"旧模板：布拉格-北京",guide:"王志洋 / 蒋沛祺",status:"待更新希腊内容",tags:["路演","返程"],events:[["7月19日 全天","布拉格中国商贸城","上午路演，下午扫街拍摄和采访。","旧模板"],["7月21日-22日","布拉格-阿布扎比-北京","EY156 / EY888 返程。","旧模板，后续替换"]]}
];

const phrases=[
["你好","Γεια σας (Yia sas)"],["再见","Αντίο (Adío)"],["谢谢","Ευχαριστώ (Efcharistó)"],["抱歉","Συγγνώμη (Signómi)"],
["我是中国的大学生","Είμαι φοιτητής/φοιτήτρια από την Κίνα"],["救命","Βοήθεια! (Voíthia!)"],["我迷路了","Έχω χαθεί (Ého hathí)"],
["卫生间在哪里？","Πού είναι η τουαλέτα?"],["您能帮助我吗？","Μπορείτε να με βοηθήσετε?"],
["我需要联系中国大使馆","Πρέπει να επικοινωνήσω με την Κινεζική Πρεσβεία"],["您会讲英语吗？","Μιλάτε αγγλικά?"]
];
const phraseSpeechText=phrase=>phrase.replace(/\s*\([^)]*\)\s*/g,"").trim();

const supportPacking=[
["纪念品","按交流对象与活动安排分装，保留备用份。"],["队旗","随身携带，机场、酒店、调研点合影前确认保管人。"],
["打印版问卷","按雅典、伊拉克利翁两地调研场景分别装袋。"],["路演物资","按活动流程清点，提前确认运输与现场负责人。"]
];
const personalPacking=[
["机票","保存登机牌并打印行程单"],["护照","与钱包分开，放入贴身包"],["身份证","妥善保管，以备境内往返"],["银行卡","Visa / Master Card"],
["现金","少量欧元，避免集中存放"],["保险单","纸质版与电子版各备一份"],["签证及证件复印件","护照、签证、身份证备份"],["酒店预订单","入境时随身携带"],
["机票预订单","入境时随身携带"],["支出凭证","保存酒店流水、发票和小票"],["正装","休闲西装即可"],["中国风衣服","交流、宣讲活动使用"],
["常备药品","按需准备感冒、止痛、肠胃及外伤药"],["颈枕","长途飞机使用"],["眼罩与耳塞","长途飞行和住宿使用"],["毛巾牙具梳子拖鞋","欧洲酒店可能不提供"],
["手机绳","防盗"],["电话卡或国际漫游","出发前确认可用"],["转换插头","按欧标准备"],["充电宝","必须带有 3C 标识"],
["充电器与数据线","按设备逐项核对"],["电子设备","手机、电脑、Pad、相机、耳机等"],["化妆品","液体类注意机场容量限制"],["防晒用品","墨镜、防晒霜、帽子"],
["雨具","雨伞或雨衣"],["纸笔","记录访谈信息"],["常用 App","Uber、Bolt、Google Maps、翻译、航旅纵横、汇率速查、Yelp、TheFork"]
];

const contacts=[
["李江静","女","清华大学马克思主义学院 副教授","带队教师","15201436143"],
["张佳敏","女","清华大学人文学院2024级硕士生","带队辅导员","13999446202"],
["宁静","女","清华大学新闻学院2025级硕士生","带队辅导员","17779511233"],
["武泽英","女","清华大学日新书院2022级本科生","支队长","13651106737"],
["王冠","男","清华大学日新书院2024级本科生","支队长","17730304981"],
["王敬宜","女","清华大学日新书院2023级本科生","支队员","17326839859"],
["邵舒婷","女","清华大学日新书院2024级本科生","支队员","13813867656"],
["夏宇欣","女","清华大学日新书院2024级本科生","支队员","19808097632"],
["陈正阳","男","清华大学日新书院2024级本科生","支队员","17817729632"],
["周小乔","女","清华大学日新书院2025级本科生","支队员","13662614282"],
["宫僖","女","清华大学日新书院2025级本科生","支队员","18561931032"],
["饶晨浩","男","清华大学日新书院2025级本科生","支队员","13817972668"]
];

const transport={
athens:{title:"雅典",intro:"机场段不包含在普通多日票内，需要单独购票。学生优惠以现场人工窗口核验为准。",blocks:[
["购买方式","机场与主要地铁站设人工窗口和自动售票机。需要学生优惠时，优先携护照、学生证或 ISIC 前往人工窗口。"],
["机场至市区","从 Athens International Airport 乘地铁 3 号线（蓝线）。机场票全价 €9、学生优惠 €4.5；可在 Panormou 或 Ampelokipoi 下车，步行约 10 分钟到酒店。"],
["日常票","单程票 €1.20（90 分钟）；24 小时票 €4.10；5 日票 €8.20；3 日游客票 €20，包含一次机场往返。"],
["推荐与验票","本次推荐 5 日票 + 机场单程票，共 €17.20；学生优惠成功约 €12.70。公交、电车上车刷卡，地铁进出站均刷卡；无有效票可能罚 €100，优惠群体约 €50。"]]},
heraklion:{title:"伊拉克利翁",intro:"老城区多数地点步行约 20 分钟可达；前往克诺索斯、机场、FORTH/ITE 或克里特大学时再考虑公交或打车。",blocks:[
["打车与步行","多人同行、行李较多或早晚赶机场时可以打车。老城、港口和考古博物馆附近建议步行为主。"],
["票价分区","A 区站外 €1.30、上车 €2.30；B 区站外 €1.80、上车 €2.80；全天票 €5、24 小时票 €6、三日票 €15、七日票 €30。"],
["常用线路","三日票覆盖 A、B 区。01 线为机场线，02 线为克诺索斯线，08 线前往 FORTH/ITE 方向。"],
["使用提醒","上车买票通常更贵，尽量提前购买并按规定激活或验票。市区至机场可乘城市公交机场线，赶飞机需预留等车和堵车时间。"]]}
};

const safetyGroups=[
{id:"safety-stay",title:"住宿、饮食与礼仪",range:"1-7",items:[
"雅典等大陆地区自来水一般达到饮用标准；海岛地区水质较硬，伊拉克利翁建议瓶装水或先询问酒店。",
"希腊酒店不一定提供牙刷、牙膏、拖鞋等一次性用品；房内小冰箱、零食、付费电视或电话使用前确认价格。",
"7 月天气炎热干燥，雅典和伊拉克利翁日照强，携带遮阳帽、墨镜、防晒霜和足量饮用水。",
"博物馆、遗址和教堂遵守现场拍摄规定，避免闪光灯；军事设施、执法人员或安保区域可能禁止拍摄。",
"进入教堂、修道院时着装端庄，保持安静，不嬉闹或饮食。",
"交流时可握手、微笑或点头，注意排队、礼让与个人空间；谨慎讨论宗教、政治和历史争议。",
"饮食以地中海风味为主；酒店自助按需取用，在外用餐看管好随身包和手机。"]},
{id:"safety-theft",title:"防盗与人员密集区域",range:"8-12",items:[
"旅游区偷盗较常见，尤其是宪法广场、蒙纳斯提拉奇、协和广场、卫城周边和公共交通场所；背包前背，证件现金分开放置。",
"雅典机场线、地铁站、普拉卡老城等游客密集，避免边走边长时间低头看手机。",
"伊拉克利翁老城整体较慢，但机场、港口、公交站等换乘地点不要让行李离开视线。",
"护照、现金、银行卡贴身分开放置，保存护照、签证、保险、机票酒店信息的电子版和复印件。",
"雅典市中心如遇示威、罢工或临时交通调整，不围观拍摄，及时绕行并听从带队安排。"]},
{id:"safety-sites",title:"遗址、道路与轮渡",range:"13-16",items:[
"雅典卫城石阶多且日晒强，穿防滑舒适的鞋，不跨越围栏或攀爬遗迹。",
"克诺索斯宫殿遮阴较少，携带水、防晒霜和遮阳帽，跟随队伍，避免因拍照或购物掉队。",
"雅典和伊拉克利翁车辆、摩托车较多，走人行横道并观察来车，不边看手机边横穿。",
"海边、港口和轮渡听从工作人员安排，注意甲板、楼梯和舷梯防滑，行李不单独放在公共区域。"]},
{id:"safety-team",title:"夜间出行与突发事件",range:"17-19",items:[
"晚间避免单独前往偏僻地区，不跟随陌生人前往陌生地点；警惕搭讪、推销或转移注意力的行为。",
"自由活动至少两人同行，提前告知辅导员或支队负责人目的地和预计返回时间，保持手机电量与通讯畅通。",
"遇盗抢、纠纷或突发情况先确保人身安全，不争执或肢体冲突；脱险后报警并保留影像、凭证和证人联系方式，必要时联系中国驻希腊使馆。"]}
];

const publicPhones=[
["112","欧盟统一紧急电话","支持英语，可自动定位并转接所有紧急服务","112"],["100","希腊警察","报警、盗窃、抢劫及人身安全","100"],
["166","医疗急救","救护车、突发疾病及意外伤害","166"],["199","消防部门","火灾、救援及自然灾害","199"],
["108","希腊海岸警卫队","海上遇险、船只事故及水上救援","108"],["171","希腊旅游警察","处理游客问题、协助报案及找回失物","171"],
["14944","医院和药店查询","查询附近值班医院和 24 小时药店","14944"],["+30 2160036690","中国驻希腊大使馆领事保护","护照丢失、人身安全受威胁及重大突发事件","+302160036690"]
];
const research=[
["7月14号","维也纳犹太博物馆、美国学者座谈等旧模板资料。保留背景资料与采访提纲结构。"],
["7月15号","中车株机欧洲研发中心、中兴通讯奥地利公司旧模板资料。保留企业背景与访谈结构。"],
["7月16号","联合国工业发展组织、欧洲时报文化中心旧模板资料。保留背景与采访提纲。"],
["7月17号","新华社布拉格分社记者、捷中文化交流协会旧模板资料。保留访谈提纲。"],
["7月18号","布拉格中国商贸城、查理大学与捷克理工大学青年交流旧模板资料。保留 Background / Interview outline 结构。"]
];

const encryptedContacts={
salt:"DuyN5ElRl6z9VWtSGUVPSA==",iv:"JHqgYuPWq3gsfNxx",
data:"4DMfXT2rN8eoh4Y77h97y2ikChFoosNW1OkQocgv1xP98Qoef6O1xPUlBwFgvLX1sJ44H418GO8IcroVHqRMkWOCympJR9kvrw5IW5hroWAuiv+zmDaEXP5DaMeKmjVlxQC75Of0YUwbVV5aDxh7TMpOO1DpHXBG7JpyoRqyplJHHD3l/wwOzp7nz24aeV9hpWMUCXbEzyrvVBw2Ejw0N/chkEfj5st58DBNXOdMUNtf8OEzVnzfzqNkoYRsff29eBXxUViccbgx8kLFVDb9oFNQimQX3hy14wV5A1Q6MgcTdo3a9l86+ivGrrQUUYlon762bdFmTd2hXZaXMvuqJ9jrixS43gWayMWlpR7+6Ssiggi/+1uHWk5lbyUeHgZQs+R6ZmvuxbMKqqIpX8inKvUzxAu9AsYbBb2JU06ZnGwsTNcbMkGclQUR0VOHXh9CDvOLBI9reWV9sMfuahkXaBTNpDflkPbqwaryXCM6aJ20/xqCMCZXSA38xKBKAbW+TS6eTmbzk3nELaFubDcLAxZJQErbpBg9A6U0GXnAhA7C26dIySUPcxLhRT7B8ZyS/rfmS9gcr78whEoL8uMLYNDXbLgmIVq49dJjy9LApDJaoCqUaxQPOmbhSsfXFEXICjgMvlfPw8LkAdi0XWR+8rRUbjBTOSKETxyZsofkD18GhWwRacnHwHb3rTxMo/qs1QW1IHc9BLzVgdduR5Je5cfbC74B74eWSQboBE0bOyplXbxenleXpG04QTXA+pgH/SjWSFvghWcjaqIXOXpbnnE8bNr+mybTX5EbNlVltmO9loETvA1cVpXcyxSix/ZLPq/GUArb38xzt7Z6kpB8F0WPit6GhHxKv4uGSQVQ2DpReGH8sO9wsRtkafa0lZ7wzqJz/IQKzj++TYhRzpvTqeWNoSr3UqMXkLkkW87LJ0aFLOlXNwdPhRgNDQHWdyhnVU110HZdLEOJZp/A7JWC9Dr6l9BjibgZq5WSiFYYRlFpLHN/n8o="
};

const motionPreference=window.matchMedia("(prefers-reduced-motion: reduce)");
const easeSpring="cubic-bezier(.18,1.28,.32,1)";
const easeSoft="cubic-bezier(.16,1,.3,1)";
const swapRevisions=new WeakMap(),managedAnimations=new WeakMap(),detailStates=new WeakMap();
let activeDayIndex=0,activeTransportCity="athens";
let viewerTrigger=null,viewerAnimation=null,viewerCaptionAnimation=null,viewerClosing=false;
function cancelManaged(element){const animation=managedAnimations.get(element);if(animation){animation.cancel();managedAnimations.delete(element)}element?.style.removeProperty("will-change")}
function playManaged(element,keyframes,options){
if(!element||motionPreference.matches)return Promise.resolve();
cancelManaged(element);element.style.willChange="transform, opacity";
const animation=element.animate(keyframes,options);managedAnimations.set(element,animation);
return animation.finished.catch(()=>{}).finally(()=>{if(managedAnimations.get(element)===animation){managedAnimations.delete(element);element.style.removeProperty("will-change")}});
}
function springIn(direction=1,offset=16){
return[{opacity:0,transform:`translate3d(${offset*direction}px,10px,0) scale(.982)`},{opacity:1,transform:`translate3d(${-3*direction}px,-1px,0) scale(1.006)`,offset:.72},{opacity:1,transform:"translate3d(0,0,0) scale(1)"}];
}
async function swapContent(element,update,{direction=1,immediate=false,children=""}={}){
const revision=(swapRevisions.get(element)||0)+1;swapRevisions.set(element,revision);
cancelManaged(element);
if(immediate||motionPreference.matches||!element.children.length){update();return}
await playManaged(element,[{opacity:1,transform:"translate3d(0,0,0) scale(1)"},{opacity:.18,transform:`translate3d(${-12*direction}px,-2px,0) scale(.992)`}],{duration:130,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});
if(swapRevisions.get(element)!==revision)return;
update();
const childAnimations=children?[...element.querySelectorAll(children)].map((child,index)=>{child.style.willChange="transform, opacity";const animation=child.animate(springIn(direction,16),{duration:360,delay:index*28,easing:easeSpring,fill:"both"});animation.finished.catch(()=>{}).finally(()=>child.style.removeProperty("will-change"));return animation}):[];
await playManaged(element,springIn(direction,10),{duration:340,easing:easeSpring,fill:"both"});
await Promise.allSettled(childAnimations.map(animation=>animation.finished));
}
function setDetailExpanded(detail,expanded,animate=true){
if(!detail)return;
const previous=detailStates.get(detail);previous?.animation?.cancel();
const body=detail.querySelector(".details-body"),summary=detail.querySelector("summary");
const state={targetOpen:expanded,animation:null};detailStates.set(detail,state);summary?.setAttribute("aria-expanded",String(expanded));
if(!animate||motionPreference.matches||!body){detail.open=expanded;return}
if(expanded)detail.open=true;
body.style.willChange="transform, opacity, clip-path";
const keyframes=expanded?[{opacity:0,transform:"translate3d(0,-10px,0) scale(.992)",clipPath:"inset(0 0 20% 0)"},{opacity:1,transform:"translate3d(0,2px,0) scale(1.004)",clipPath:"inset(0 0 0 0)",offset:.74},{opacity:1,transform:"translate3d(0,0,0) scale(1)",clipPath:"inset(0 0 0 0)"}]:[{opacity:1,transform:"translate3d(0,0,0)",clipPath:"inset(0 0 0 0)"},{opacity:0,transform:"translate3d(0,-7px,0) scale(.996)",clipPath:"inset(0 0 22% 0)"}];
const animation=body.animate(keyframes,{duration:expanded?340:180,easing:expanded?easeSpring:"cubic-bezier(.4,0,1,1)",fill:"both"});state.animation=animation;
animation.finished.catch(()=>{}).finally(()=>{body.style.removeProperty("will-change");if(detailStates.get(detail)!==state)return;if(!state.targetOpen)detail.open=false;animation.cancel();state.animation=null});
}

function renderDay(index=0,immediate=false){
const day=days[index];
const direction=index>=activeDayIndex?1:-1;activeDayIndex=index;
document.querySelectorAll(".tab-button").forEach((button,i)=>{button.classList.toggle("is-active",i===index);button.setAttribute("aria-selected",i===index?"true":"false")});
const layout=document.querySelector(".schedule-layout"),dayCard=document.querySelector("#dayCard"),timeline=document.querySelector("#timeline");
return swapContent(layout,()=>{dayCard.innerHTML=`<div class="date">${day.date}</div><div class="city">${day.city}</div><p><strong>导游/负责人：</strong>${day.guide}</p><p><strong>状态：</strong>${day.status}</p><div class="tags">${day.tags.map((tag,i)=>`<span class="tag ${i%2?"blue":"gold"}">${tag}</span>`).join("")}</div>`;timeline.innerHTML=day.events.map(([time,place,desc,note])=>`<article class="event"><div class="event-time">${time}</div><div class="event-place">${place}</div><p>${desc}<span class="event-note">${note}</span></p></article>`).join("")},{direction,immediate,children:".event"});
}
function makeChecklist(containerId,items,prefix){
const root=document.querySelector("#"+containerId);
root.innerHTML=items.map(([title,note],index)=>{const key=`qztx-${prefix}-${index}`;return`<label class="check-row"><input type="checkbox" data-store="${key}"><span><strong>${title}</strong>${note}</span></label>`}).join("");
root.querySelectorAll("input").forEach(input=>{input.checked=localStorage.getItem(input.dataset.store)==="1";input.addEventListener("change",()=>{localStorage.setItem(input.dataset.store,input.checked?"1":"0");const row=input.closest(".check-row");if(!motionPreference.matches)playManaged(row,[{transform:"scale(1)"},{transform:input.checked?"scale(1.024)":"scale(.982)",offset:.5},{transform:"scale(1)"}],{duration:280,easing:easeSpring})})});
}
function renderTransport(city="athens",immediate=false){
const data=transport[city];
const direction=city===activeTransportCity?1:(city==="heraklion"?1:-1);activeTransportCity=city;
document.querySelectorAll(".segment-button").forEach(button=>{const active=button.dataset.city===city;button.classList.toggle("is-active",active);button.setAttribute("aria-selected",active?"true":"false")});
const panel=document.querySelector("#transportPanel");
return swapContent(panel,()=>{panel.innerHTML=`<h3>${data.title}</h3><p>${data.intro}</p><div class="transport-grid" aria-label="${data.title}交通信息">${data.blocks.map(([title,body],index)=>`<article class="transport-block ${index%2?"is-light":"is-dark"}"><span class="transport-index">${String(index+1).padStart(2,"0")}</span><h4>${title}</h4><p>${body}</p></article>`).join("")}</div>`},{direction,immediate,children:".transport-block"});
}
function renderStaticContent(){
document.querySelector("#dayTabs").innerHTML=days.map((day,index)=>`<button class="tab-button ${index===0?"is-active":""}" type="button" role="tab" aria-selected="${index===0}" data-index="${index}">${day.date}</button>`).join("");
document.querySelector("#phrases").innerHTML=phrases.map(([cn,gr],index)=>{const isDark=(Math.floor(index/2)+index%2)%2===0;return`<article class="phrase-card ${isDark?"is-dark":"is-light"}"><div><strong>${cn}</strong><span>${gr}</span></div><button class="phrase-play" type="button" data-speech="${phraseSpeechText(gr)}" aria-label="播放${cn}的希腊语发音">播放</button></article>`}).join("");
makeChecklist("supportPacking",supportPacking,"support");makeChecklist("personalPacking",personalPacking,"personal");
document.querySelector("#contactsTable").innerHTML=contacts.map(row=>`<tr>${row.map((cell,index)=>index===4?`<td><a class="member-phone" href="tel:${String(cell).replace(/\s/g,"")}">${cell}</a></td>`:`<td>${cell}</td>`).join("")}</tr>`).join("");
document.querySelector("#safetyGroups").innerHTML=safetyGroups.map(group=>`<details id="${group.id}"><summary>${group.title} <span class="tag muted">${group.range}</span></summary><div class="details-body"><ul>${group.items.map(item=>`<li>${item}</li>`).join("")}</ul></div></details>`).join("");
document.querySelector("#publicPhones").innerHTML=publicPhones.map(([number,title,body,dial])=>`<article class="phone-card" id="phone-${dial.replace(/\D/g,"")}"><div class="phone-number">${number}</div><h3>${title}</h3><p>${body}</p><a class="call-link" href="tel:${dial}"><img src="assets/icons/phone.svg" alt="">拨打</a></article>`).join("");
document.querySelector("#researchList").innerHTML=research.map(([date,body])=>`<details><summary>${date}<span class="placeholder-mark">待更新</span></summary><div class="details-body"><p>${body}</p></div></details>`).join("");
renderDay(0,true);renderTransport("athens",true);
}
function base64Bytes(value){const binary=atob(value);return Uint8Array.from(binary,char=>char.charCodeAt(0))}
async function decryptEmergency(password){
const material=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveKey"]);
const key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:base64Bytes(encryptedContacts.salt),iterations:180000,hash:"SHA-256"},material,{name:"AES-GCM",length:256},false,["decrypt"]);
const plain=await crypto.subtle.decrypt({name:"AES-GCM",iv:base64Bytes(encryptedContacts.iv),tagLength:128},key,base64Bytes(encryptedContacts.data));
return JSON.parse(new TextDecoder().decode(plain));
}
async function unlockEmergency(){
const status=document.querySelector("#emergencyStatus"),content=document.querySelector("#emergencyContent");status.textContent="正在验证…";
try{const rows=await decryptEmergency(document.querySelector("#emergencyPassword").value);content.innerHTML=`<div class="table-wrap"><table><thead><tr><th>成员</th><th>亲属紧急联系人</th><th>关系</th><th>紧急电话</th></tr></thead><tbody>${rows.map(row=>`<tr>${[row[0],row[2],row[3],row[4]].map(cell=>`<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;content.hidden=false;status.textContent="已解锁。用完，记得重新锁定。"}catch{content.hidden=true;content.innerHTML="";status.textContent="密码不正确。请检查后再试。"}
}
function lockEmergency(){document.querySelector("#emergencyPassword").value="";document.querySelector("#emergencyContent").hidden=true;document.querySelector("#emergencyContent").innerHTML="";document.querySelector("#emergencyStatus").textContent="已锁定。"}

const searchCorpus=[
...days.map((day,index)=>({type:"行程",title:`${day.date} ${day.city}`,text:JSON.stringify(day),target:"schedule",day:index})),
...phrases.map(row=>({type:"常用语",title:row[0],text:row.join(" "),target:"prepare"})),
...supportPacking.map(row=>({type:"支队物资",title:row[0],text:row.join(" "),target:"support-details",open:true})),
...personalPacking.map(row=>({type:"个人物资",title:row[0],text:row.join(" "),target:"packing-details",open:true})),
...contacts.map(row=>({type:"通讯录",title:row[0],text:row.join(" "),target:"contacts-details",open:true})),
{type:"住宿",title:"雅典总统酒店",text:"雅典 President Hotel Leof. Kifisias 43 2025.07.14 2025.07.18",target:"hotel-athens"},
{type:"住宿",title:"伊拉克利翁城市城堡酒店",text:"伊拉克利翁 Castello City Hotel Leof. 62 Martiron 1 2025.07.19 2025.07.22",target:"hotel-heraklion"},
...Object.entries(transport).map(([city,data])=>({type:"交通",title:data.title,text:data.title+data.intro+JSON.stringify(data.blocks),target:"transportPanel",city})),
...safetyGroups.map(group=>({type:"安全",title:group.title,text:group.items.join(" "),target:group.id,open:true})),
...publicPhones.map(([number,title,body,dial])=>({type:"公开电话",title:`${number} ${title}`,text:`${number} ${title} ${body}`,target:`phone-${dial.replace(/\D/g,"")}`})),
...research.map(([date,body])=>({type:"调研",title:date,text:date+body,target:"research",research:date}))
];
function runSearch(){
const keyword=document.querySelector("#searchInput").value.trim().toLowerCase(),output=document.querySelector("#searchResults");
if(!keyword){output.innerHTML='<p class="empty">输入关键词，马上找到。</p>';return}
const matches=searchCorpus.filter(item=>item.text.toLowerCase().includes(keyword)).slice(0,20);
output.innerHTML=matches.length?matches.map((item,index)=>`<button class="search-result" type="button" data-result="${index}"><small>${item.type}</small><strong>${item.title}</strong></button>`).join(""):'<p class="empty">没有匹配结果。换个词试试。</p>';
output.querySelectorAll(".search-result").forEach((button,index)=>button.addEventListener("click",()=>jumpToResult(matches[index])));
}
function jumpToResult(item){
if(Number.isInteger(item.day))renderDay(item.day);if(item.city)renderTransport(item.city);
const target=document.getElementById(item.target);if(target?.tagName==="DETAILS"||item.open)setDetailExpanded(target,true);
if(item.research)[...document.querySelectorAll("#researchList details")].forEach(detail=>{if(detail.querySelector("summary")?.textContent.includes(item.research))setDetailExpanded(detail,true)});
closeSearch(false);setTimeout(()=>{target?.scrollIntoView({behavior:motionPreference.matches?"auto":"smooth",block:"center"});target?.classList.add("target-flash");setTimeout(()=>target?.classList.remove("target-flash"),720)},240);
}
let searchFocusReturn=null,searchTimer=0;
function openSearch(){const overlay=document.querySelector("#searchOverlay");clearTimeout(searchTimer);searchFocusReturn=document.activeElement;overlay.classList.add("is-open","is-springing");overlay.setAttribute("aria-hidden","false");document.querySelector("#openSearch").setAttribute("aria-expanded","true");document.body.classList.add("search-open");document.body.style.overflow="hidden";searchTimer=setTimeout(()=>{overlay.classList.remove("is-springing");document.querySelector("#searchInput").focus()},motionPreference.matches?0:380)}
function closeSearch(restoreFocus=true){const overlay=document.querySelector("#searchOverlay");clearTimeout(searchTimer);overlay.classList.remove("is-open","is-springing");overlay.setAttribute("aria-hidden","true");document.querySelector("#openSearch").setAttribute("aria-expanded","false");document.body.classList.remove("search-open");searchTimer=setTimeout(()=>{document.body.style.overflow="";if(restoreFocus)searchFocusReturn?.focus?.()},motionPreference.matches?0:220)}

function cancelViewerMotion(){viewerAnimation?.cancel();viewerCaptionAnimation?.cancel();viewerAnimation=null;viewerCaptionAnimation=null}
function viewerTransform(from,to){
return{transform:`translate3d(${from.left+from.width/2-to.left-to.width/2}px,${from.top+from.height/2-to.top-to.height/2}px,0) scale(${Math.max(.08,from.width/to.width)},${Math.max(.08,from.height/to.height)})`}
}
async function openImageViewer(trigger){
const overlay=document.querySelector("#imageViewer"),viewerImage=document.querySelector("#imageViewerImage"),photo=document.querySelector(".image-viewer-photo"),caption=document.querySelector(".image-viewer-figure figcaption");
const sourceImage=trigger.querySelector("img"),hotel=trigger.closest(".hotel");viewerTrigger=trigger;viewerClosing=false;cancelViewerMotion();
viewerImage.src=sourceImage.currentSrc||sourceImage.src;viewerImage.alt=sourceImage.alt;document.querySelector("#imageViewerTitle").textContent=hotel.querySelector("h3")?.textContent||sourceImage.alt;document.querySelector("#imageViewerAddress").textContent=hotel.querySelector(".address")?.textContent.trim()||"";
overlay.classList.remove("is-closing");overlay.classList.add("is-open");overlay.setAttribute("aria-hidden","false");document.body.classList.add("image-viewer-open");
await viewerImage.decode().catch(()=>{});await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
if(!motionPreference.matches){const from=sourceImage.getBoundingClientRect(),to=photo.getBoundingClientRect(),start=viewerTransform(from,to);photo.style.willChange="transform, opacity";caption.style.willChange="transform, opacity";viewerAnimation=photo.animate([{opacity:.72,transform:start.transform,borderRadius:"18px"},{opacity:1,transform:"translate3d(0,-4px,0) scale(1.012,1.012)",offset:.78},{opacity:1,transform:"translate3d(0,0,0) scale(1,1)",borderRadius:getComputedStyle(photo).borderRadius}],{duration:470,easing:easeSpring,fill:"both"});viewerCaptionAnimation=caption.animate([{opacity:0,transform:"translate3d(0,14px,0)"},{opacity:1,transform:"translate3d(0,-2px,0)",offset:.78},{opacity:1,transform:"translate3d(0,0,0)"}],{duration:340,delay:100,easing:easeSpring,fill:"both"});viewerAnimation.finished.catch(()=>{}).finally(()=>photo.style.removeProperty("will-change"));viewerCaptionAnimation.finished.catch(()=>{}).finally(()=>caption.style.removeProperty("will-change"))}
document.querySelector("#closeImageViewer").focus({preventScroll:true});
}
async function closeImageViewer(restoreFocus=true){
const overlay=document.querySelector("#imageViewer");if(!overlay.classList.contains("is-open")||viewerClosing)return;viewerClosing=true;cancelViewerMotion();const photo=document.querySelector(".image-viewer-photo"),caption=document.querySelector(".image-viewer-figure figcaption"),sourceImage=viewerTrigger?.querySelector("img");
overlay.classList.add("is-closing");
if(!motionPreference.matches&&sourceImage?.isConnected){const from=photo.getBoundingClientRect(),to=sourceImage.getBoundingClientRect(),end=viewerTransform(to,from);photo.style.willChange="transform, opacity";viewerAnimation=photo.animate([{opacity:1,transform:"translate3d(0,0,0) scale(1,1)"},{opacity:.58,transform:end.transform}],{duration:210,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});viewerCaptionAnimation=caption.animate([{opacity:1,transform:"translate3d(0,0,0)"},{opacity:0,transform:"translate3d(0,8px,0)"}],{duration:150,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});await viewerAnimation.finished.catch(()=>{})}
overlay.classList.remove("is-open","is-closing");overlay.setAttribute("aria-hidden","true");document.body.classList.remove("image-viewer-open");cancelViewerMotion();photo.style.removeProperty("will-change");viewerClosing=false;if(restoreFocus)viewerTrigger?.focus({preventScroll:true});viewerTrigger=null;
}

renderStaticContent();
document.querySelector("#dayTabs").addEventListener("click",event=>{const button=event.target.closest(".tab-button");if(button)renderDay(Number(button.dataset.index))});
document.querySelectorAll(".segment-button").forEach(button=>button.addEventListener("click",()=>renderTransport(button.dataset.city)));
document.querySelector("#unlockEmergency").addEventListener("click",unlockEmergency);document.querySelector("#lockEmergency").addEventListener("click",lockEmergency);
document.querySelector("#emergencyPassword").addEventListener("keydown",event=>{if(event.key==="Enter")unlockEmergency()});
document.querySelector("#openSearch").addEventListener("click",openSearch);document.querySelector("#closeSearch").addEventListener("click",closeSearch);
document.querySelector("#searchButton").addEventListener("click",runSearch);document.querySelector("#searchInput").addEventListener("keydown",event=>{if(event.key==="Enter")runSearch()});
document.querySelector("#searchOverlay").addEventListener("click",event=>{if(event.target.id==="searchOverlay")closeSearch()});
document.querySelectorAll(".hotel-image-trigger").forEach(trigger=>trigger.addEventListener("click",()=>openImageViewer(trigger)));
document.querySelector("#closeImageViewer").addEventListener("click",()=>closeImageViewer());document.querySelector("#imageViewer").addEventListener("click",event=>{if(event.target.id==="imageViewer")closeImageViewer()});
document.querySelector("#phrases").addEventListener("click",event=>{const button=event.target.closest(".phrase-play");if(button)playGreekPhrase(button)});
document.addEventListener("keydown",event=>{const viewer=document.querySelector("#imageViewer"),overlay=document.querySelector("#searchOverlay");if(viewer.classList.contains("is-open")){if(event.key==="Escape")closeImageViewer();if(event.key==="Tab"){event.preventDefault();document.querySelector("#closeImageViewer").focus()}return}if(event.key==="Escape"&&overlay.classList.contains("is-open"))closeSearch();if(event.key==="Tab"&&overlay.classList.contains("is-open")){const focusable=[...overlay.querySelectorAll("button,input,[href]")].filter(item=>!item.disabled);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});

function playGreekPhrase(button){
const text=button.dataset.speech;
if(!("speechSynthesis" in window)||!text){button.textContent="不可用";setTimeout(()=>button.textContent="播放",1200);return}
speechSynthesis.cancel();
const utterance=new SpeechSynthesisUtterance(text),voices=speechSynthesis.getVoices();
utterance.voice=voices.find(voice=>voice.lang?.toLowerCase().startsWith("el"))||null;
utterance.lang="el-GR";utterance.rate=.86;utterance.pitch=1.02;
button.classList.add("is-playing");button.textContent="播放中";
utterance.onend=utterance.onerror=()=>{button.classList.remove("is-playing");button.textContent="播放"};
speechSynthesis.speak(utterance);
}

function setupPressFeedback(){
if(motionPreference.matches)return;
const selector=".tab-button,.segment-button,.button,.call-link,.search-fab,.close-search,.dock a,.phrase-play,.member-phone,.hotel-image-trigger";
document.addEventListener("pointerdown",event=>{
const target=event.target.closest(selector);
if(!target||target.dataset.pressMotion==="1")return;
target.dataset.pressMotion="1";target.style.willChange="transform";
target.animate([{transform:getComputedStyle(target).transform==="none"?"scale(1)":getComputedStyle(target).transform},{transform:"scale(.965)"}],{duration:115,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"}).finished.catch(()=>{});
},{passive:true});
document.addEventListener("pointerup",event=>releasePress(event.target.closest(selector)),{passive:true});
document.addEventListener("pointercancel",event=>releasePress(event.target.closest(selector)),{passive:true});
function releasePress(target){if(!target||target.dataset.pressMotion!=="1")return;delete target.dataset.pressMotion;const animation=target.animate([{transform:"scale(.965)"},{transform:"scale(1.018)",offset:.62},{transform:"scale(1)"}],{duration:230,easing:easeSpring});animation.finished.catch(()=>{}).finally(()=>target.style.removeProperty("will-change"))}
}

document.querySelectorAll("details").forEach(detail=>{const summary=detail.querySelector("summary");summary?.setAttribute("aria-expanded",String(detail.open));summary?.addEventListener("click",event=>{if(motionPreference.matches)return;event.preventDefault();const state=detailStates.get(detail),currentlyOpen=state?state.targetOpen:detail.open;setDetailExpanded(detail,!currentlyOpen)})});
setupPressFeedback();

const dock=document.querySelector(".dock"),dockLinks=[...dock.querySelectorAll("a")],sections=dockLinks.map(link=>document.querySelector(link.getAttribute("href")));
function setDockActive(link){const index=dockLinks.indexOf(link);if(index<0)return;dock.style.setProperty("--dock-index",String(index));dockLinks.forEach(item=>item.classList.toggle("is-active",item===link))}
setDockActive(dockLinks[0]);
const sectionObserver=new IntersectionObserver(entries=>{entries.filter(entry=>entry.isIntersecting).forEach(entry=>setDockActive(dockLinks.find(link=>link.getAttribute("href")===`#${entry.target.id}`)))},{rootMargin:"-25% 0px -62% 0px",threshold:0});sections.forEach(section=>sectionObserver.observe(section));
dockLinks.forEach(link=>link.addEventListener("click",()=>setDockActive(link)));
const heroObserver=new IntersectionObserver(([entry])=>document.body.classList.toggle("hero-visible",entry.isIntersecting),{threshold:.18});
heroObserver.observe(document.querySelector(".hero"));

document.querySelectorAll(".reveal").forEach(group=>{const children=[...group.querySelectorAll(":scope > .section-head,:scope > .tabs,:scope > .schedule-layout,:scope > .subhead,:scope > .grid-2,:scope > .phrase-grid,:scope > details,:scope > .segment,:scope > .transport-panel,:scope > .weather-grid,:scope > .phone-grid,:scope > .locked,:scope > .research-list")];children.forEach((child,index)=>{child.classList.add("motion-child");child.style.setProperty("--stagger-index",String(Math.min(index,7)))})});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}})},{threshold:.07,rootMargin:"0px 0px -5% 0px"});document.querySelectorAll(".reveal").forEach(element=>revealObserver.observe(element));
if(location.hash){const deepTarget=document.querySelector(location.hash);deepTarget?.querySelector(".reveal")?.classList.add("is-visible");deepTarget?.scrollIntoView({behavior:"auto",block:"start"});}

document.body.classList.add("motion-ready");requestAnimationFrame(()=>document.body.classList.add("is-ready"));
const topbar=document.querySelector(".topbar"),hero=document.querySelector(".hero"),heroMedia=document.querySelector(".hero-media"),progressBar=document.querySelector(".scroll-progress span");
heroMedia.addEventListener("animationend",()=>heroMedia.classList.add("is-settled"),{once:true});setTimeout(()=>heroMedia.classList.add("is-settled"),820);
let scrollFrame=0,heroWillChangeTimer=0,heroHeight=Math.max(1,hero.offsetHeight),lastAmbient="",lastHeroY="",lastScrolled=false,lastProgress=-1;
function updateScrollEffects(){
scrollFrame=0;
const y=window.scrollY,max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
const progress=Math.round(Math.min(1,y/max)*1000)/1000;
if(progress!==lastProgress){progressBar.style.transform=`scaleX(${progress})`;lastProgress=progress}
const scrolled=y>10;if(scrolled!==lastScrolled){topbar.classList.toggle("is-scrolled",scrolled);lastScrolled=scrolled}
const heroProgress=Math.min(1,Math.max(0,y/(heroHeight*.92))),ambientProgress=Math.min(1,Math.max(0,(heroProgress-.1)/.9));
if(y<heroHeight*1.35){const ambient=`${Math.round(ambientProgress*145)/1000}|${Math.round((1.055-ambientProgress*.025)*1000)/1000}|${Math.round(heroProgress*1000)/1000}`;if(ambient!==lastAmbient){document.documentElement.style.setProperty("--ambient-opacity",String(ambientProgress*.145));document.documentElement.style.setProperty("--ambient-scale",String(1.055-ambientProgress*.025));hero.style.setProperty("--hero-exit",String(heroProgress));lastAmbient=ambient}}
else if(lastAmbient!=="off"){document.documentElement.style.setProperty("--ambient-opacity","0");hero.style.setProperty("--hero-exit","1");lastAmbient="off"}
if(!motionPreference.matches&&heroMedia&&y<window.innerHeight*1.05){const nextY=`${Math.min(24,y*.045).toFixed(1)}px`;heroMedia.style.willChange="transform, opacity";if(nextY!==lastHeroY){hero.style.setProperty("--hero-y",nextY);lastHeroY=nextY}clearTimeout(heroWillChangeTimer);heroWillChangeTimer=setTimeout(()=>heroMedia.style.removeProperty("will-change"),120)}else if(lastHeroY!=="0px"){hero.style.setProperty("--hero-y","0px");lastHeroY="0px"}
}
function requestScrollEffects(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScrollEffects)}
window.addEventListener("scroll",requestScrollEffects,{passive:true});
window.addEventListener("resize",()=>{heroHeight=Math.max(1,hero.offsetHeight);requestScrollEffects()},{passive:true});
updateScrollEffects();
motionPreference.addEventListener?.("change",event=>{if(event.matches){document.querySelectorAll(".reveal").forEach(element=>element.classList.add("is-visible"));cancelManaged(document.querySelector(".schedule-layout"));cancelManaged(document.querySelector("#transportPanel"))}});
