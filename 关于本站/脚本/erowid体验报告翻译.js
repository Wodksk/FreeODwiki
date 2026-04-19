/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。这是一个Markdown项目（而且是用mkdocs生成页面），我给你的文本已经被转化为Markdown格式了，但是还没有翻译。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果应该是一个格式不变(除非以下任务明确要求改变)的。


即便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其送给一个Javascript脚本。
- 输出格式(要带引号，注意只有时间1元素必定要加一个“给药:”，其余没有)：
  const chineseParas = [标题中文, 药物中文 ,段落1, 段落2, ......, 段落n-1, 段落n, 尾注];
  const chineseDosechart = [给药:时间1, 剂量1, 给药方式1, 物质1, 形式1, ......] 
  const chineseBodyweight = 体重翻译字符串(数字+单位)
- 在药物中文和段落之间可能出现，作者、引用、原网址。若有，忽略之。
- 翻译标题下药物时，使用如下格式（如果药物不足，这个顺序向右对准）：药物1、药物2、......、药物n-2、药物n-1&药物n
- 翻译尾注时，跳过"ExpYear...","Gender...","Age...","Published...","[ViewPDF(to print)]..."，直接翻译最后一段。
- 药物剂量表格原文的格式，但是你要输出成一维数组：

| 时间       | 剂量     | 给药方式 | 物质                  | 形式          |
|------------|----------|----------|-----------------------|---------------|
| 给药: |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |

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

const chineseDosechart = [
  "给药:T+ 0:00", "1.1 盎司", "口服", "肉豆蔻", "（粉末 / 晶体）",
  "T+ 0:32", "480 毫克", "口服", "右美沙芬", "（药丸 / 片剂）",
  "T+ 0:45", "140 粒种子", "口服", "曼陀罗", "（种子）",
  "T+ 0:50", "0.5 片", "鼻吸", "氢可酮", "（药丸 / 片剂）",
  "T+ 0:55", "0.5 片", "鼻吸", "苯丙胺", "（药丸 / 片剂）",
  "T+ 1:40", "几斗", "抽吸", "大麻", "（植物材料）",
  "T+ 2:10", "6 盎司", "口服", "酒精", "（液体）"
];

const chineseParas = [
  "千万不要联用太多药物！",
  "曼陀罗、右美沙芬、氢可酮、哌甲酯、肉豆蔻、酒精&大麻",
  "引言：在 00 年 10 月 27 日晚上，我极度想让自己进入药效状态，因为我已经清醒了 2 个月。我的朋友 L 一直在唠叨药物联用，最后他拿 1/4 盎司大麻和我打赌，说我不敢一次把这些药全都用了。我答应了这个赌约，然后我们把药都凑齐了（大麻、右美沙芬、酒精和肉豆蔻是我出的钱，他弄来了曼陀罗、维柯丁和利他林）。免得你们好奇，经历这次体验之前，我抽过大麻，体验过右美沙芬（只有一次，用了 8 片），也体验过曼陀罗（在我住的地方它叫“月花”，我吃过两次，两次都是把一个荚果里的种子全吃了），还喝醉过。在这之前我从没试过维柯丁、利他林或肉豆蔻。参与这件事的一共有 3 个人，包括我。我会把另外两个朋友称作“L”和“M”。为了准备这次体验，我们把我要用的药全都弄到了。那天是星期五，所以我能有几天时间躲开父母、警察、老师之类的人（我和 M 一起去了 L 家，L 的父亲一开始在家，但从周五下午 12:45 到周六下午 4:00，L 家里只有我、M 和 L）。我们还准备了冰块、乔利牧场糖和橙汁。大约到下午 1:00 左右，我们把一切都准备好并计划妥当了。",
  "所有姓名和电话号码都已做过更改。",
  "我做的第一件事就是把那瓶（呃）肉豆蔻吃下去（我有整整一瓶 1.1 盎司的）。我一次一大口一大口地吃肉豆蔻，尽快咽下去，然后喝橙汁。我最后把那整瓶肉豆蔻都吃完了（这事非常难做到而不吐出来，我差一点就吐了，但我忍住了）。我一直等到下午 1:32，然后把右美沙芬药片吞了下去（科立西丁咳嗽感冒药，16 片，480 毫克右美沙芬）。到 1:45 时，我把月花种子吃了下去（2 个荚果，直径约 2 又 1/4 英寸，大约 140 粒种子，未煮过，也没晒干）。然后我又鼻吸了略少于半片的维柯丁和半片利他林。到 1:53 时，我开始觉得头晕目眩、轻飘飘的。",
  "到 2:40 时，我还在感受到利他林的作用（我觉得那是利他林，我很亢奋也很头晕，我也觉得月花的体验已经开始了），而且明显感受到了右美沙芬。我想要一点大麻的药效，所以我抽了大约价值 10 美元的一点大麻（我自己有 1/4 盎司可以抽，L 和 M 则有 1/8 盎司给他们两人分）。L 和 M 两个人一起抽了几斗。我们就那样坐着聊天，一直到大约 3:10，这时 M 跟我说，我最好把酒喝掉，再把剩下的大麻抽完，因为接下来我的体验会强得太离谱。我把剩下的大麻都抽了，但那真的把我的喉咙弄得很疼（我因为月花导致口干得厉害）。我一边抽一边含着冰块，那稍微有点帮助，乔利牧场糖就没那么管用了。最后一件要做的事就是喝酒，所以我喝了一杯 L 调的螺丝刀鸡尾酒（里面大概有 4 杯伏特加），还喝了大约一杯摩根船长鹦鹉湾椰子朗姆酒（L 的爸爸买了这个和伏特加，然后就去上班了，不过他不知道别的药）。我感觉自己已经被搞得一塌糊涂了。这之后我唯一记得的事情，就是看了《惊声尖叫3》开头 5 到 10 分钟里的部分片段（这是 M 租来的），还说了点话。故事剩下的部分都是 L 和 M 告诉我的，除了我梦境中的一些片段之外，我一点都不记得。",
  "当我们在看电影剩下的部分时，我一直往房间外面跑。M 跟着我，我猜我就是在他家里到处乱晃。他会叫我回房间，而我只会胡言乱语地回应，像是“哦，他没有烟斗，但我敢打赌那块宝石会有。”或者“真的吗？我还以为你不会呢。”然后 M 就会把我带回他的房间。我说了些像“阿索，那条狗把我的喉咙烧坏了”之类的话，还指着自己的嘴，然后我试着跑去卫生间，但我一直在摔倒、踉跄，所以我爬到他的垃圾桶旁边，连续往里面吐了两次。我的眼睛非常充血，瞳孔放大，而且眼睛睁得很大。大约 4:00 的时候我尿裤子了，到 4:45 时我几乎无法呼吸。我试着说话，但一点声音都发不出来，于是我只好指着自己的嘴，然后开始哭。我喝了很多橙汁，还吃冰块和乔利牧场糖，想把口干缓解掉。到晚上大约 6:25 时，我在 M 房间的地板上昏过去了。",
  "我在睡着的时候抽动得很厉害，而且会把所有话都大声说出来。（我的朋友们一直醒着，以确保我不会弄坏什么东西，而且我有时会醒过来，毫无理由地重新摆放东西（比如把一摞纸放进冰箱里，或者把电视在房间里搬来搬去）。从晚上 6:30 到凌晨 3:20，我一直在说话，不过我一直睡到 6:15。以下是我朋友记得我说过的一些话：\n\n“真的吗？”（这句话我至少说了 8 次）\n“喂，B 在吗？”“这里不是 555-0934 吗？”（B 是我的一个朋友）\n“喂，R 在吗？”“都已经 8:00 了，你怎么还这么慢？”（R 是给我卖大麻的人，我说这话的时候大约是晚上 11 点）\n“Y，给我进来！”（Y 是我哥哥，我喊得特别大声）\n“靠，那烟锅跑哪去了！？它刚刚还在这儿！”（这句话我说了很多次，有时会把烟锅说成大麻烟，而且我大多数说这句话的时候都会睁开眼睛）\n“你现在还不能那样做！！”",
  "我醒来之后的事我全都记得。",
  "当我醒来的时候，我还在感受月花的作用，不过其他东西的药效都已经退了。我会听到一些声音，而且感觉有点像喝醉了。至于视觉幻觉，我只记得两种（我门上有一团会动的绿色团块，还有颜色差异）。M 跟我说：“哥们你昨晚怎么一直说个不停，看你那样真的太迷了。”我完全不知道他在说什么，然后 M 和 L 才把我一直说了那么久话的事告诉我。我唯一记得的梦，就是给 B 打电话，以及在学校里走来走去。我继续待在 M 家里，不过 L 在早上 8:00 就回家了。我到下午 3:00 才回家，因为 M 说我还在和并不存在的人说话，不过我在下午 2:15 左右停下来了。在那之后我病了大约 3 天，而 L 也给了我那份我完全活该赢得的 1/4 盎司。所以，总之，我会建议你永远不要联用太多药物。我做的事非常愚蠢，差点把自己害死。",
  "大麻（1）、酒精（61）、苯丙胺（6）、氢可酮（111）、曼陀罗（15）、右美沙芬（22）、肉豆蔻（41）、药品 - 哌甲酯（114）：小团体（2-9人）（17）、艰难体验（5）、药物联用（3）"
];

const chineseBodyweight = "140磅"

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
const dosechartSelector  = 'table.dosechart';
const bodyweightSelector = 'table.bodyweight';
const footdataTopicSelector  = 'td.footdata-topic-list';

// ================== 3. 你的本地字体 + 样式 ==================
const customFont   = "南希新圆体 常规";
const fontSize     = "19px";
const fontSizeTitle     = "25px";
const fontSizeDosechart = "14px";
// const textColor    = "#00a218";
// const textColorTitle    = "#009d22";
const textColor    = "#083f91";
const textColorTitle    = "#04508e";
const textColorDosechart    = "#00234e";
const lineHeight   = "1.3";
const paraMargin   = "0px 0 0px 0";

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
    ${extraCss}
  `;
  }
  else if (cls=='dosechart-chinese-entry')
  {
    el.style.cssText = `
    font-family: "${customFont}", "Microsoft YaHei", "Noto Sans SC", sans-serif !important;
    font-size: ${fontSizeDosechart} !important;
    color: ${textColorDosechart} !important;
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

// D.插入末端表中文(TBD)

const footdataTopicEl = document.querySelector(footdataTopicSelector);
if (footdataTopicEl && chineseParas[chineseParas.length-1]) {
  const footdataTopic = makeCnBlock(
    chineseParas[chineseParas.length-1],
    'footdata-topic-list', 
    'td',);
  footdataTopic.setAttribute("colspan", "2")
  const chineseTr = document.createElement('tr')
  chineseTr.appendChild(footdataTopic)
  footdataTopicEl.parentNode.after(chineseTr);
} else {
  console.warn('⚠️ 没找到尾注，或 chineseParas[-1] 为空');
}

// E.插入剂量表中文

const dosechartEl = document.querySelector(dosechartSelector);
const dosechartColumnNum = dosechartEl.firstElementChild.firstElementChild.childElementCount;
const dosechartRowNum = dosechartEl.firstElementChild.childElementCount;
let currentDosechartRow = dosechartEl.firstElementChild.firstElementChild;

if (dosechartEl && chineseDosechart) {
  for(let i=0;i<dosechartRowNum;i++)
  {
    const chineseTr = document.createElement('tr'); 
    for(let j=0;j<dosechartColumnNum;j++)
    {
      let align=undefined;
      if (j==0){align="right";}
      else if (j==1||j==2){align="center";}
      const chineseDosechartEntry = makeCnBlock(
        chineseDosechart[i*dosechartColumnNum+j], 
        'dosechart-chinese-entry', 
        'td', 
      )
      if (align) {
        chineseDosechartEntry.setAttribute('align', align);
      }
      chineseTr.appendChild(chineseDosechartEntry);
    }
    currentDosechartRow.after(chineseTr);
    currentDosechartRow = currentDosechartRow.nextElementSibling;
    currentDosechartRow = currentDosechartRow.nextElementSibling;
  }
} else {
  console.warn('⚠️ 没找到尾注，或 chineseDosechart 为空');
}

// F.插入体重中文

const bodyweightEl = document.querySelector(bodyweightSelector);
if (bodyweightEl && chineseBodyweight) {
  const cnBodyweightTr = document.createElement('tr');
  const cnBodyweightTitle = makeCnBlock(
    '体重:', "bodyweight-title", "td"
  )
  const cnBodyweightAmount = makeCnBlock(
    chineseBodyweight, 'bodyweight-amount', "td"
  )
  cnBodyweightTr.appendChild(cnBodyweightTitle);
  cnBodyweightTr.appendChild(cnBodyweightAmount);
  bodyweightEl.firstElementChild.firstElementChild.after(cnBodyweightTr);

} else {
  console.warn('⚠️ 没找到尾注，或 chineseParas[-1] 为空');
}

// 输出文档

let s = `# ${chineseParas[0]}`;

s += `——${chineseParas[1]}\n\n`;

s += "[◀返回](./home.md)\n\n";

s += `原文网址：<${document.URL}>\n\n`

// | 时间       | 剂量     | 给药方式 | 物质                  | 形式          |
// |------------|----------|----------|-----------------------|---------------|
// | 剂量： |3片   | 口服 | LSD | 邮票  |
// |    |  |  口服   |  大麻 - 高THC  | 食物 |
// |    |  |  抽吸   |  大麻   | 食物 |
// |    |  |  吸食   |  一氧化二氮   |  |

// 注：“形式”可能没有

let t;
const doseChinese = "剂量：";

if (dosechartColumnNum==5)
{
  t=`| 时间       | 剂量     | 给药方式 | 物质                  | 形式          |\n|------------|----------|----------|-----------------------|---------------|\n`;
  for(let i=0;i<dosechartRowNum;i++)
  {
    t+=`| ${chineseDosechart[i*dosechartColumnNum]} | ${chineseDosechart[i*dosechartColumnNum+1]} | ${chineseDosechart[i*dosechartColumnNum+2]} | ${chineseDosechart[i*dosechartColumnNum+3]} | ${chineseDosechart[i*dosechartColumnNum+4]} |\n`;
  }
}
else{
  t=`| 时间       | 剂量     | 给药方式 | 物质                  |\n|------------|----------|----------|-----------------------|\n`;
  for(let i=0;i<dosechartRowNum;i++)
  {
    t+=`| ${chineseDosechart[i*dosechartColumnNum]} | ${chineseDosechart[i*dosechartColumnNum+1]} | ${chineseDosechart[i*dosechartColumnNum+2]} | ${chineseDosechart[i*dosechartColumnNum+3]} |\n`;
  }
}

s += t + "\n";

s += `|体重:| ${chineseBodyweight}|\n|---|---|   \n\n`;

for(let i=2;i<chineseParas.length-1;i++)
{
  s += chineseParas[i] + "\n\n";
}

console.log(s);