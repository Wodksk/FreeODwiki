/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。这是一个Markdown项目（而且是用mkdocs生成页面），我给你的文本已经被转化为Markdown格式了，但是还没有翻译。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果应该是一个格式不变(除非以下任务明确要求改变)的。


即便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其送给一个Javascript脚本。
- 输出格式(要带引号)：const chineseParas = [标题中文, 药物中文, 药物剂量表格(见下) ,段落1, 段落2, ......, 段落n-1, 段落n, 尾注] 
- 在药物中文和段落之间可能出现，作者、引用、原网址、药物剂量表、体重。若有，忽略之。
- 翻译标题下药物时，使用如下格式（如果药物不足，这个顺序向右对准）：药物1、药物2、......、药物n-2、药物n-1&药物n
- 翻译尾注时，跳过"ExpYear...","Gender...","Age...","Published...","[ViewPDF(to print)]..."，直接翻译最后一段。

</prompt>
<glossary>

|英文|译文|备注|
|----|---|---|
|DXM| 右美沙芬|当指右美沙芬(药物)时|
|DPH|苯海拉明|当指苯海拉明(药物)时|
|substituted|取代...类物质|当指的是一类物质，且特征是某个物质的衍生物时|
|phenidates|苄基哌啶类物质|指的是此类化学结构物质时|
|Dox|2,5-二甲氧基苯丙胺类物质|指的是此类化学结构的物质时|
|2C-X|2,5-二甲氧基苯乙胺类物质|指的是此类化学结构的物质时|
|Pentedrone|NMP|指的东西的化学名为α-methylaminovalerophenone时，作为缩写使用|
|Hexedrone|NMH|指的是α-甲氨基苯己酮时，作为全称|
|Ethylone|MDEC|指的是3,4-methylenedioxy-N-ethylcathinone时|
|Ephylone|MDNEP|适用时|
|Eutylone|MDNEB|指的是β-Keto-1,3-benzodioxolyl-N-ethylbutanamine时|
|amphetamine|苯丙胺||
|crack cocaine|霹雳可卡因||
|crack|霹雳可卡因|指的是霹雳可卡因时|
|Bufotenin|蟾毒色胺||
|psychedelic|迷幻剂||
|substituted name|取代名称||
|subjective effect|主观效应||
|subjective effect index|主观效应索引|当指的是专有名词时|
|combination|药物联用|当指的是联用药物是|
|Oral|口服| 当指的是给药途径时|
|Smoked|抽吸| 当指的是给药途径时|
|insufflated|鼻吸| 当指的是给药途径时|
|intravenous|静脉注射| 当指的是给药途径时|
|high|药效(等名词)|当指的是药物的效果时，不得翻译为"嗨"|


<
| 英文                            | 译文                   |
| ----------------------------- | -------------------- |
| --- All ---                   | --- 全部 ---           |
| General                       | 常规                   |
| First Times                   | 首次体验                 |
| Combinations                  | 药物联用                 |
| Retrospective / Summary       | 回顾 / 总结              |
| Preparation / Recipes         | 准备 / 配方              |
| Difficult Experiences         | 艰难体验                 |
| Bad Trips                     | 糟糕体验                 |
| Health Problems               | 健康问题                 |
| Train Wrecks & Trip Disasters | 彻底失控&体验事故            |
| Addiction & Habituation       | 成瘾&习惯化               |
| Glowing Experiences           | 美好体验                 |
| Mystical Experiences          | 神秘体验                 |
| Health Benefits               | 健康益处                 |
| Families                      | 家庭                   |
| Medical Use                   | 医疗用途                 |
| What Was in That?             | 那里面是什么？              |
| -----------                   | -----------          |
| Video                         | 视频                   |
| Overdose                      | 药物过量                   |
| Cultivation / Synthesis       | 栽培 / 合成              |
| Music Discussion              | 音乐讨论                 |
| Guides / Sitters              | 引导者 / 陪护者            |
| Performance Enhancement       | 表现提升                 |
| Loss of Magic                 | 魔力消退                 |
| Personal Preparation          | 个人准备                 |
| Multi-Day Experience          | 多日体验                 |
| Depression                    | 抑郁                   |
| Relationships                 | 关系                   |
| Post Trip Problems            | 体验后问题                |
| Nature / Outdoors             | 自然 / 户外              |
| HPPD / Lasting Visuals        | 致幻剂持续性知觉障碍 / 持续性视觉效应 |
| Sex Discussion                | 性讨论                  |
| Poetry                        | 诗歌                   |
| Pregnancy / Baby              | 怀孕 / 婴儿              |
| Therapeutic Intent or Outcome | 治疗意图或结果              |
| Entities / Beings             | 实体 / 存在              |
| Hangover / Days After         | 宿醉 / 之后几天            |
| Second Hand Report            | 二手报告                 |

| 英文                               | 译文              |
| -------------------------------- | --------------- |
| - - - - - - - -                  | - - - - - - - - |
| Alone                            | 独自              |
| Small Group (2-9)                | 小团体（2-9人）       |
| Large Group (10+)                | 大团体（10人以上）      |
| Club / Bar                       | 俱乐部 / 酒吧        |
| Rave / Dance Event               | 锐舞 / 舞会活动       |
| Large Party                      | 大型派对            |
| Festival / Lg. Crowd             | 节庆 / 大型人群       |
| Group Ceremony                   | 团体仪式            |
| School                           | 学校              |
| Workplace                        | 工作场所            |
| Military                         | 军队              |
| Hospital                         | 医院              |
| Therapeutic Session / Clinic     | 治疗会谈 / 诊所       |
| Various                          | 多种情况            |
| Unknown Context                  | 未知情境            |
| Public Space (Museum, Park, etc) | 公共空间（博物馆、公园等）   |
| Not Applicable                   | 不适用             |


</glossary>
<raw>

</raw>
*/

// ================== 1. 中文内容 ==================
// chineseParas[0] = 标题中文
// chineseParas[1] = 药物中文
// chineseParas[2...] = 正文各段中文

const chineseParas = [
  "季节终会与你擦肩而过：LSD用于自我提升",
  "LSD、大麻&一氧化二氮",
  "在我那段迷幻兮兮的20多岁岁月结束十五年后（那时接触过各种各样的迷幻剂和其他有趣物质），命运几经转折，让我在人生一个艰难的夏天里两次重新接触了LSD。20多岁时，我一直在试着寻找上帝，并靠用药来试图实现这个目标。如今我已经40多岁了，是个无神论者，也不知道该期待些什么。20多岁时，我一直在试着寻找上帝，并靠用药来试图实现这个目标。如今我已经40多岁了，是个无神论者，也不知道该期待些什么，所以我担心自己可能会有一场糟糕体验。在这之前，我试着建立一些不错的日常习惯，比如：“每天走15分钟路”“每天做一件家务”“在体验那天之前完成你的音乐项目，这样你就能在体验时听它了”之类，还想着“嗯，就算我玩得不太好，我也可以想想这些积极的事，也许心情会被提起来嘛”。幸好，第一次那晚（两片）我玩得非常开心，而且我还发现，当我终于回顾自己的进步时，会涌起一阵强烈的喜悦浪潮。那天之后，我继续保持这些日常习惯，而每当我开始变懒时，我就会回想起那阵强烈的喜悦，它反过来又会激励我。难道我是碰到了什么门道吗？",
  "我弄到了三片，准备在生日那天安排一次独自体验。这一次，我决定再加上一个目标（除了那些我一直在继续、只偶尔有点小失误的目标之外）——重新养成记录每日全部热量摄入的习惯（也希望能把后来又长回来的体重减掉一点）。只是这一次，我没有像以前那样每周日休息一天不记，而是在体验日前整整一个月里，每一天都记录。我还试着在那一周里“先把桌子摆好”，在工作、副业、音乐项目和家庭生活上都更用力一些。我知道自己生日当天和第二天都不用上班。这会像是额外赚到的一个周末，而为了彻底与世隔绝，我借到了一个朋友的湖边小屋。没有责任、没有人类之类的干扰。",
  "日落时，我走到码头上，抽了一点大麻，吃了半颗100毫克THC软糖，然后把贴片放到舌下。我排了一份Yes、Genesis和King Crimson的播放列表，摆好音箱、灯带（顺带一提，这真是体验时超棒的配件）、笔记本电脑和一氧化二氮气弹，然后就让一切开始吧。我也很开心地报告一下：是的，当我回顾的不只是那一个月的热量记录，还有我其他每天做的家务、散步之类的事情时，那股欣快的浪潮又回来了（还有我减掉的10磅！）。",
  "音乐在LSD作用下听起来很棒。但在*更多*的LSD作用下，听起来会*真的*特别棒。三片真的把联觉这一面推得很强——这很难准确形容，但我记得自己在听到某些音符时，会“感觉到”它们朝我推过来，或者让我一阵发抖之类的。这种感觉强到足以让Steve Howe在《Drama》里的吉他在我眼皮上活成一只咆哮的老虎，把他们翻唱的《America》变成一首管弦乐序曲和史诗般的声音诗篇，让Genesis的《Selling England By The Pound》化作一部不列颠田园日常传奇，还让King Crimson《Red》专辑里的现场即兴曲《Providence》也活了起来。",
  "当然啦，我也听了自己的项目。我为自己的作品感到非常自豪，而它里面充满了合成器的涌动和叮叮当当的键盘声，对我的联觉喂养得特别好。但我也意识到：“靠……该开始下一个项目了。” 到了这个时候，我也意识到，成年生活和LSD结合在一起，给了我某种对我来说真的很有效的东西。我也意识到，成年生活和LSD结合在一起，给了我某种对我来说真的很有效的东西，并让我对自我提升有了新的看法。我也把这些经验应用到了“为了能在体验时爽到而去做这件事”这种范式之外，而这对我的整体动力有着惊人的效果。我已经安排好了三个月后的下一次机会。到那时候，我要把那个新项目做完，还要减到能穿进我生日礼物那件《Close to the Edge》T恤的体重。我很期待这磨人的三个月，也期待那种让我两次都喜极而泣的快乐极乐再次回来。看起来，计划里投入的时间和/或努力越多，那份喜悦就越强。当然，LSD也不全是玫瑰，总会有些艰难时刻和情绪得自己熬过去。但兜里揣着那份喜悦，真的帮大忙了！",
  "还有一些别的有趣时刻呢：",
  "我的思绪开始有点打转了（一氧化二氮吸得稍微有点猛），于是我决定盯着小屋主人挂在墙上的鹿头标本看。它随着音乐一波一波地慢慢瓦解，起伏扭动，直到我眨眼为止。然后一切又会重新开始。我他妈地完全看呆了，而且这还真的有点把我从思绪打转里拽了出来。我记下了这一点：如果糟糕念头再次冒出来，我可以用这个来逃离它们。幸好，后来并没有再出现。",
  "那天晚上，我会不时走到甲板上，抽上一口烟斗分量的大麻。夜里很凉，昆虫的声音美得不行。树木随着昆虫声，以及从敞开的纱门里传出的音乐一起舞动……在明亮的上弦月下听着《Moonchild》，再伴着蟋蟀的鸣叫……那可真是好东西呢。",
  "上一次时，体验的“主要部分”大概持续了5个小时才开始退去。我猜是因为多了一片，这次直到6.5小时后才真的开始往下掉。到这时候，我开始看《Kill Bill》，并用了最后几枚一氧化二氮气弹。每一次，屏幕都会重新活过来，仿佛我又回到了高峰一样。不过这次它会随着一氧化二氮药效过去而退下去，而不是像上次那样持续好几分钟。（顺带一提，一氧化二氮和迷幻剂真的是绝配）",
  "我不是医生、心理学家，也不是萨满。所以我不会声称这对其他人也一定有用。但它对我有用。设定目标——让它们可实现——然后把它们实现。再用迷幻剂来强化其中积极的那一面。冲洗，然后重复吧。我还有一条规则，而且幸好我还没用上：如果我把自己的目标搞砸了——不是偶尔漏掉一下，而是彻底把计划抛到一边——那我就取消这次体验。要保住这种积极联结，不要让失败把它污染了。我希望自己在下一次体验之后还会继续这样下去。我希望好运还能继续眷顾我。我也希望这能帮到读到它的某个人。",
  "LSD（2）、大麻（1）、一氧化二氮（40）：药物联用（3）、美好体验（4）、音乐讨论（22）、个人准备（45）、治疗意图或结果（49）、回顾 / 总结（11）、独自（16）"
];



// 剂量表每一行对应一条中文
// const chineseDoseRows = [
//   '剂量：7 mg，口服，4-MeO-DMT（胶囊）',
//   '重复使用，口服，酒精（啤酒/葡萄酒）',
//   '重复使用，吸食，大麻'
// ];

// ================== 2. 选择器 ==================
const titleSelector = 'div.title';
const substanceSelector = 'div.substance';
const bodySelector  = 'div.report-text-surround';
const doseSelector  = 'table.dosechart tr';
const footdataTopicSelector  = 'td.footdata-topic-list';

// ================== 3. 你的本地字体 + 样式 ==================
const customFont   = "南希新圆体 常规";
const fontSize     = "19px";
const fontSizeTitle     = "25px";
// const textColor    = "#00a218";
// const textColorTitle    = "#009d22";
const textColor    = "#083f91";
const textColorTitle    = "#04508e";
const lineHeight   = "1.3";
const paraMargin   = "5px 0 5px 0";

// ================== 以下代码基本无需修改 ==================



// 先清理之前注入过的中文，避免重复运行时叠加
document.querySelectorAll('.cn-translation, .cn-dose-translation-row').forEach(el => el.remove());

document.querySelectorAll('.pullquote-right1').forEach(el => {
    const parent = el.parentNode;
    
    // 1. 先移除目标元素
    el.remove();
    
    // 2. 对父元素调用 normalize()，它会自动把左右相邻的纯文本节点（包括引号等）合并成一个
    if (parent) {
        parent.normalize();
    }
});

document.querySelectorAll('br').forEach(el => el.remove()); // 删除神秘空行

function applyCnStyle(el, cls, extraCss = '') {
  el.classList.add(cls);
  if (cls=='title')
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSizeTitle} !important;
    line-height: ${lineHeight} !important;
    color: ${textColorTitle} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }
  else if (cls=='substance')
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSize} !important;
    line-height: ${lineHeight} !important;
    color: ${textColorTitle} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }
  else
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSize} !important;
    line-height: ${lineHeight} !important;
    color: ${textColor} !important;
    margin: ${paraMargin} !important;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
    ${extraCss}
  `;
  }

  return el;
}

function makeCnBlock(text, cls, tag = 'p', extraCss = '') {
  const el = document.createElement(tag);
  applyCnStyle(el, cls, extraCss);
  el.textContent = text;
  return el;
}

// ---------- A1. 插入标题中文 ----------

let cnt = 0;

const titleEl = document.querySelector(titleSelector);
if (titleEl && chineseParas[cnt]) {
  const title = makeCnBlock(
    chineseParas[cnt],
    'title', 
    'div',
    'font-weight: 700 !important; margin: 6px 0 12px 0 !important;'
  );
  titleEl.after(title);
  cnt++;
} else {
  console.warn('⚠️ 没找到标题，或 chineseParas[0] 为空');
}

// ---------- A2.插入药物中文 ----------

const substanceEl = document.querySelector(substanceSelector);

if (substanceEl && chineseParas[cnt]) {
  const substance = makeCnBlock(
    chineseParas[cnt],
    'substance', 
    'div',
    'font-weight: 700 !important; margin: 6px 0 12px 0 !important;'
  );
  substanceEl.after(substance);
  cnt++;
} else {
  console.warn('⚠️ 没找到标题，或 chineseParas[0] 为空');
}

// // ---------- B. 插入剂量表中文 ----------
// const doseRows = [...document.querySelectorAll(doseSelector)];
// if (doseRows.length > 0) {
//   doseRows.forEach((row, i) => {
//     if (!chineseDoseRows[i]) return;

//     const newRow = document.createElement('tr');
//     newRow.className = 'cn-dose-translation-row';

//     const td = document.createElement('td');
//     td.colSpan = row.children.length || 5;
//     td.style.cssText = `
//       padding: 2px 0 6px 0 !important;
//       border: none !important;
//     `;

//     const cnDose = makeCnBlock(
//       chineseDoseRows[i], 
//       'cn_translation', 
//       'div',
//       'margin: 0 !important; font-size: 16px !important;'
//     );

//     td.appendChild(cnDose);
//     newRow.appendChild(td);
//     row.after(newRow);
//   });
// } else {
//   console.warn('⚠️ 没找到 dose chart');
// }

// ---------- C. 插入正文中文 ----------
// Erowid 这里正文不是 p，而是 report-text-surround 下的直接文本节点
const bodyWrap = document.querySelector(bodySelector);

if (!bodyWrap) {
  console.error('❌ 没找到正文容器');
} else {
  const bodyTextNodes = [...bodyWrap.childNodes].filter(node => {
    return (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
    );
  });

  const bodyChinese = chineseParas.slice(cnt);

  if (bodyTextNodes.length === 0) {
    console.error('❌ 没找到正文段落文本节点');
  } else {
    bodyTextNodes.forEach((textNode, i) => {
      if (!bodyChinese[i]) return;
      const cnPara = makeCnBlock(bodyChinese[i], 'p');
      textNode.after(cnPara);
    });

    
  }
}

// D.插入末端表中文

const footdataTopicEl = document.querySelector(footdataTopicSelector);
if (footdataTopicEl && chineseParas[chineseParas.length-1]) {
  const footdataTopic = makeCnBlock(
    chineseParas[chineseParas.length-1],
    'footdata-topic-list', 
    'td',);
  const footdataTopicTrEl = footdataTopicEl.parentNode.after()
  footdataTopicEl.parentNode.after(footdataTopic);
} else {
  console.warn('⚠️ 没找到尾注，或 chineseParas[-1] 为空');
}

