/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。这是一个Markdown项目（而且是用mkdocs生成页面），我给你的文本已经被转化为Markdown格式了，但是还没有翻译。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果应该是一个格式不变(除非以下任务明确要求改变)的。


即便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其送给一个Javascript脚本。判断是否应该分段的依据是两行文字间是否有一个空行，只有有空行，才算分段。
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

const chineseParas = ["生命是一场旅程，而非终点", "大麻", "我一直都算是相对孤独的人，但这让我的孤独跌到了一个前所未有的低点。我现在正坐在自家客厅的安稳环境里写下这些；过去一个月里，我都待在这里，收拾着自己人生破碎散落的残片。在我看来，我的生活一直都是一团情绪上的混乱，但真正让它变得更糟的，只有我自己做出的选择，以及我在生活中做过的那些事。这就是成瘾。它程度不算重，也许正因如此，这种成瘾才是人生中最容易被遮蔽的那一种；但现在我终于能看清它了，也终于看清了它对我人生造成的影响。", "我是个挺聪明、年轻、也算长得不错的家伙，这点我承认；也许正因为如此，我这一生才能一直躲开自己的抑郁。我父母离婚了，这就是我抑郁的根源。他们在任何事情上都无法达成一致，他们是两个截然不同的人，什么都谈不拢，而我一直被夹在中间。我从父母那里各自继承了两种极性相反的人格，把它们都收容进了自己的心灵里，而这让我快要发疯。这些年来，尤其是在我高中生涯最后两年里，我原本开始逐渐能够较好地掌控自己的抑郁，直到我遇见了玛丽简，她毁掉了一切。其实这并不能怪她。是我自己选择把她带进我的生活。我的朋友们都大量使用大麻，而这么多年来我一直选择不用。我知道药物不好，但我根本不知道为什么不好。我不了解它会对人的心理产生什么影响，而我又非常好奇。我想，我最初的使用更像是在试探一种禁忌，但它最终变成了一趟通往地狱的旅程，而现在我正在往回走。", "起初，我大约每两个月和朋友一起用一次大麻，图个乐子；几年之后，我开始越来越频繁地和朋友一起用。高中毕业年级那年年中，有一周我开始每周晚上用一次，后来变成一周两次，直到我每晚都靠它入睡。我睡不着，是因为我无法把心思从一年前分手的前女友身上移开。这其实是我为了能抽而对自己兜售的谎言。这就是成瘾在第一线运作的样子。一开始真的很有趣。我会熬夜看电影或者打电子游戏。到了那个时候，我其实已经不太喜欢和朋友一起抽，虽然我还是会这么做。在我看来，跟朋友一起抽，只会占用我在家独自抽的时间（和大麻）。大多数时候，我一进入药效就会变得非常偏执，不管是在家里还是和朋友在一起时都是如此；这也是我不喜欢和别人一起抽的原因之一，但即便如此，我还是一直在抽。", "等我上了大学，一切他妈就彻底放飞了。我在圣巴巴拉城市学院上学，住在加州大学圣巴巴拉分校所在的大学城伊斯拉维斯塔。姑娘、冲浪、大麻（哦对了，还有上学）就是那里生活的全部主题。平均每周派对三到五天，几乎根本没剩多少时间留给学业。而让我的成瘾更容易被持续喂养的是：我的室友是个卖家，而我高中时最好的朋友也搬进了我宿舍走廊尽头的房间。对我当时过的那种生活来说，一切都再完美不过了。", "可我依然非常孤独。我仅有的朋友，都是和我一起抽的人。和那些不抽的朋友之间的关系随着时间推移逐渐淡了；而和我那些抽友之间的关系本来也糟透了，因为我从来没有投入过任何感情。我只是和他们一起抽，仅此而已。这并不是大麻的错。真正该被责怪的，是我对自己的缺乏爱，以及这种状态与大麻相伴而行。我其实一直都知道这一点，但我什么都没做来帮助自己。我根本不想帮自己。我一开始就恨自己，而大麻只不过是在缓解这种痛苦。现在我意识到，我本该更早寻求专业帮助，而不是等到后来才去。尽管如此，我其实在更小的时候、上初中时就曾接受过治疗，但那时依然没有什么效果。", "有一段时间，我还能维持一个还算不错的平均绩点，直到第二学期来临。我开始不去上课，只为了跑到走廊尽头我最好朋友的套间里抽大麻、玩电脑游戏。到这个时候，我已经穷得叮当响，只能待在朋友的宿舍里等他们抽的时候顺便带我。我成了个肮脏的白嫖鬼。也正因如此，我对自己的尊重丧失了太多。有些没大麻可抽的日子里，我会整天把自己锁在宿舍房间里，垂头丧气地晃来晃去，盼着死亡赶紧来把我带走。我开始变得非常抑郁，不去上课，只去上班。生活糟糕到一种程度，以至于我开始遗憾自己窗户离地面的距离不够高，不足以让我结束生命。大多数日子里，我都开始盼望死亡降临到自己身上，那已经成了我的地狱。", "学年结束后，我参加了半个暑期课程学期，随后就退学了。我从宿舍搬到了伊斯拉维斯塔最热闹的派对街区。起初一切都还不错，直到我再次陷入严重抑郁，再也无法想象自己还能在那个鬼地方再待上一年，于是我拼命想搬回家。我父母理解了，我便搬回了家，而在那里，我只是在自己的大麻成瘾里越陷越深。", "在圣巴巴拉时，有时候我会把自己能弄到的很便宜的大麻转手给朋友，因为我有门路却没钱；作为回报，朋友们会请我抽。回家之后，我已经掌握了足够多关于这一套黑话与门道的知识，于是开始做起了卖货。我从不赊账，所有货都是自己掏钱买自己的芽。后来我找了份工作，大概一个月后，我每三天就能出掉两盎司，这足够让我免费抽，还能赚到钱。我知道自己做的只是小打小闹，但那是我给自己开辟出来的一块挺不错的小生态位。不过这个泡沫并没持续太久；在我开始涉足卖其他药物之后（比如摇头丸、可卡因），它就破了。而且，我对这些对我来说还算新鲜的药物也再次充满了好奇，尤其是可卡因，因为我以前从来没钱碰它。我并没有对可卡因上瘾，但我和摇头丸却有过一段灾难性的纠缠，几乎直接把我搞到没法继续做下去，因为我手里的药片根本不够，而我又总是在消耗自己大部分存货。再加上，我一度是在自己工作的冰淇淋店里出货，事情已经开始变得危险起来。", "等我破产以后，我觉得是时候来一次重大的改变了。人生中总会有那么一个时刻：你已经厌烦自己正在过的生活，到了根本无法再把十年后的自己想象成一个幸福的人的地步。我决定，对我来说，那个时刻已经到了。我厌倦了把一切都瞒着父母，过着双重生活。我也厌倦了开车四处跑，车里带着足以让我因重罪坐四到六年牢的大量药物和器具。我同样痛恨这样一个事实：把药物放在家里，也同样是在把我的父母置于危险之中。", "有一天，我妈下班回到家时，我向她坦白了。我让她坐下，把我的烟斗（名字叫Spot）和一罐大麻拿了出来。除了贩卖的事我没说之外，我把一切都告诉了她，因为那部分她永远也不会理解。我告诉她我的成瘾，也告诉她我想停下来。我告诉她我有多抑郁，也告诉她我想得到帮助。是时候改变了，而她对此理解得非常透彻。她的反应简直无价。她之前完全不知道，但她回答说：“所以，这就是你一直看起来那么糟糕的原因。”", "“是的，妈，这就是原因 =）”", "我感觉肩上的一大块重担被卸下来了，但我知道自己前面还有很长的路要走。在我坦白之后的四周，是我很久以来经历过最糟糕的日子。我一直都很愤怒，也不想和任何人说话。我还再次找了个治疗师来帮助我处理抑郁。上周，在已经戒断一个半月之后，我复发了。我抽了一个星期，然后意识到自己为什么再也不能碰它了。我现在甚至已经不是在追求欣快感了。我只是在寻找一种精神状态的改变，好把我从当下那种痛苦的思维轨道里带走。我的治疗师理解这一点，现在正打算让我开始服用抗抑郁药，而我觉得这其实一直都是我所需要的。", "我今天还要去参加人生中的第一次“大麻匿名会”聚会。我对此非常紧张，也根本不想去，但我知道无论如何，这终究会是最好的安排。至少我能在那里遇见和我一样的人。对我来说这很难，因为我知道问题的主要根源并不只是大麻，而是我的抑郁。它们一旦结合在一起，就会把我拖垮。只要我有治疗师引导我，我就有信心自己能挺过去。去MA（大麻匿名会）是她的主意，而我信任她，所以我当时想：“那就试试吧？” 现在想来，拥有治疗师，再去参加MA，正好同时应对了我生命中那两样正在把我拖下去的东西：抑郁，以及大麻。", "我这一生都在探寻自己的灵魂。我19岁了，而我昨天在一次四英里的徒步中意识到了一件事，嗯，你没法把它解释清楚。有时候，你会走到人生中的某个点，在那个点上，你知道自己会没事的。我的人生开始逐渐变得有意义，各种东西也开始汇拢到一起，但如果没有我的父母，我不可能走到这里。一旦你把家人带入自己的处境之中，不管那处境是什么，真正关心你的人都不会再让你滑落下去。你只需要做出一个决定：让他们进入你的生活。人生中总有那么一个时刻，你必须允许自己被帮助。我接下来的障碍，就是允许自己被别人爱，也允许自己爱自己。", "大麻（1）：回顾 / 总结（11）、抑郁（15）、成瘾&习惯化（10）、不适用（38）"];

const chineseDosechart = ["给药:", "重复", "抽吸", "大麻", "（植物材料）"];
const chineseBodyweight = "130磅";

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
const fontSize     = "20px";
const fontSizeTitle     = "27px";
const fontSizeDosechart = "15px";
const textColor    = "#7ace87";
const textColorTitle    = "#63e07e";
const textColorDosechart    = "#7adb92";
// const textColor    = "#083f91";
// const textColorTitle    = "#04508e";
// const textColorDosechart    = "#00234e";
const lineHeight   = "1.3";
const paraMargin   = "4px 1 4px 1";

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
  else if (cls=='dosechart-chinese-entry' || cls=='bodyweight-title' || cls=='bodyweight-amount'||cls=='footdata-topic-list')
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

for(let i=2;i<chineseParas.length;i++)
{
  s += chineseParas[i] + "\n\n";
}

console.log(s);