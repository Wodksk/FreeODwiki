/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。这是一个Markdown项目（而且是用mkdocs生成页面），我给你的文本已经被转化为Markdown格式了，但是还没有翻译。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果应该是一个格式不变(除非以下任务明确要求改变)的。




即便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 由于我要发到社交媒体上去，你的翻译必须接地气和吸睛，可以引发读者共鸣，诱导情感的产生。
- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其送给一个Javascript脚本。判断是否应该分段的依据是两行文字间是否有至少一个换行符。
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

<fileTree>
FreeODwiki/ ( 关于本站/ ( FreeOD引论.md Markdown语法指南.md 免责声明.md 如何做出你的第一个贡献.md 实用链接.md 常见问题.md 文档翻译指南和提示词.md 本站精神.md 隐私条款.md ) 文档/ ( 药物分类/ ( 2,5-二甲氧基苯丙胺类物质.md 2,5-二甲氧基苯乙胺类物质.md 4-硫基-2,5-二甲氧基苯乙胺类物质.md index.md N-苄基苯乙胺类物质.md NMDA受体拮抗剂类药物.md β-咔啉类物质.md κ-阿片受体激动剂类药物.md 二芳基乙胺类物质.md 亚甲双氧基苯类物质.md 促梦剂.md 促醒剂.md 共情剂.md 兴奋剂.md 加巴喷丁类物质.md 卡瓦.md 卡西酮类物质.md 合成大麻素类物质.md 吗啡喃类物质.md 吡咯烷基苯基酮类物质.md 吡咯烷类物质.md 吸入剂.md 哌啶类物质.md 哌嗪类物质.md 噻吩二氮卓类物质.md 大麻类.md 宗教致幻剂.md 巴比妥类物质.md 托烷类物质.md 抑制剂.md 拉西坦类物质.md 环烷基胺类物质.md 生物碱类物质.md 益智药.md 致幻剂.md 色胺类物质.md 芳基环己胺类物质.md 苄基哌啶类物质.md 苯丙胺类物质.md 苯乙胺类物质.md 苯二氮卓类物质.md 苯并呋喃类物质.md 药物全索引.md 解离剂.md 谵妄剂.md 迷幻剂.md 金刚烷类物质.md 阿片类药物.md 阿米雷司类物质.md 骆驼蓬生物碱.md 麦角酸酰胺类物质.md 黄嘌呤类物质.md 鼠尾草素类物质.md ) D-柠檬烯食醋DMT提取术.md DPT游离碱转化术.md GABA.md index.md HPPD.md od.md P物质.md SSRI.md 不建议使用的药物.md 不建议使用的词汇.md 乙酰胆碱.md 信号转导.md 催眠药.md 共享注射用材料.md 兴奋剂精神病.md 兴奋剂自慰.md 冥想.md 冷水萃取术.md 减量戒断法.md 前药列表.md 单胺.md 单胺氧化酶抑制剂.md 危险药物联用.md 去甲肾上腺素.md 受体.md 受体拮抗剂.md 受体激动剂.md 受体负向变构调节剂.md 受体逆向激动剂.md 可卡因合成术.md 可逆性MAOA抑制剂.md 复现索引.md 多巴胺.md 多药联用列表.md 大麻巧克力.md 大麻种植术.md 大麻饼干.md 大麻黄油.md 天然药物来源.md 娱乐性用药.md 孢子印.md 室外蘑菇种植术.md 常见合法药物表.md 异构体.md 强制断药戒断法.md 恢复体位.md 恶性旅程.md 情景与心境.md 愈美分离术.md 感官剥夺.md 抗抑郁药.md 抗精神病药.md 抗组胺药.md 教学索引页.md 旅程保姆.md 未知成分策划药的危害.md 止痛药阿片类药物提取术.md 正向变构调节剂.md 死藤水三明治.md 死藤水制备指南.md 死藤水烹饪术.md 毒蝇伞：异噁唑酸脱羧为蝇蕈醇.md 氢氧化钠石脑油法DMT提取术.md 水发酵术.md 治疗指数.md 液体容量给药法.md 清明梦.md 清明梦探索.md 激素.md 濒死体验.md 癫痫发作.md 睡眠瘫痪.md 研究用化学品.md 神经元.md 神经递质.md 神经递质再摄取抑制剂.md 神经递质释放剂.md 科学信息索引页.md 突触.md 简易麦斯卡林酿造技巧.md 精神探索.md 精神活性巧克力.md 糙米粉赛洛西宾蘑菇种植术.md 组胺.md 终止旅程.md 给药剂量.md 给药途径.md 罂粟种子茶.md 肾上腺素.md 舒尔金评级量表.md 药效下降期.md 药效时长.md 药物分类.md 药物剂量分类.md 药物剂量量取.md 药物前药.md 药物戒断反应.md 药物过量.md 蘑菇茶及其制备.md 蟾毒素列表.md 血清素-去甲肾上腺素再摄取抑制剂.md 血清素.md 血清素综合征.md 血脑屏障.md 试剂检测套件.md 谷氨酸.md 负责任的用药索引页.md 较安全的注射指南.md 迷幻剂旅程保姆.md 配体.md 镇静剂.md 阿托品颠茄提取术.md 鼻腔喷雾指南.md ) 药效/ ( index.md 不可名状的恐怖.md 不宁腿.md 不适性身体效应.md 不适性躯体效应.md 专注力强化.md 专注力抑制.md 个人偏见抑制.md 个人意义强化.md 主观效应索引.md 亮度改变.md 人格解体.md 人格退化.md 体味改变.md 体温升高.md 体温调节抑制.md 便秘.md 偏执.md 共情、情感和社交能力增强.md 内省增强.md 内部幻觉.md 几何.md 出汗增加.md 分析能力增强.md 分析能力抑制.md 分离层级.md 分离效应.md 创造力增强.md 创造力抑制.md 刺激.md 剂量独立强度.md 动力抑制.md 动机增强.md 医用药物表.md 去抑制.md 口干.md 口腔麻木.md 听觉幻觉.md 听觉扭曲.md 听觉效应.md 听觉锐度增强.md 听觉锐度抑制.md 呕吐.md 周边信息误判.md 味觉增强.md 味觉幻觉.md 呼吸增强.md 呼吸抑制.md 咳嗽抑制.md 唾液分泌增加.md 嗅觉与味觉效应.md 嗅觉增强.md 嗅觉幻觉.md 嗅觉抑制.md 困倦.md 场景、布景和景观.md 复视.md 外部幻觉.md 多感官效应.md 多重思维流.md 天然来源表.md 失忆.md 头晕.md 头痛.md 妄想.md 存在主义自我实现.md 宣泄.md 宿命论感知.md 对称纹理重复.md 尿频.md 幻觉状态.md 幽默感增强.md 强迫性补量.md 影子人.md 心律异常.md 心率减慢.md 心率增快.md 心理效应.md 心血管效应.md 快感缺失.md 思维减速.md 思维加速.md 思维循环.md 思维混乱.md 思维组织.md 思维连通性.md 性欲减退.md 性欲增强.md 性高潮抑制.md 恶心.md 恶心抑制.md 情感抑制.md 情景与情节.md 情绪强化.md 惊恐发作.md 感知到接触意识的内在机制.md 成分可控性.md 成瘾抑制.md 抑郁.md 抑郁减轻.md 排尿困难.md 支气管扩张.md 放大.md 新型认知状态.md 新奇感增强.md 既视感.md 时间扭曲.md 时间缩放.md 易怒.md 暂时性勃起功能障碍.md 暗示性强化.md 暗示性抑制.md 机械景观.md 梦境强化.md 梦境抑制.md 概念性思维.md 模式识别增强.md 模式识别抑制.md 正念.md 残影.md 永恒主义感知.md 沉浸感强化.md 流泪.md 流涕.md 深度感知扭曲.md 混乱.md 清醒度.md 漂移.md 濒死感.md 灵性增强.md 焦虑.md 焦虑抑制.md 物体改变.md 物体激活.md 狂笑.md 环境切片.md 环境图案化.md 环境球体化.md 环境立体主义.md 现实感丧失.md 畏光.md 痰液增多.md 瘙痒感.md 癫痫发作.md 癫痫发作抑制.md 皮肤潮红.md 相互依存的对立面感知.md 眼球滑动.md 瞳孔扩大.md 瞳孔缩小.md 磨牙.md 空间定向障碍.md 精神病发作.md 纹理液化.md 统一感与互联感.md 耐力增强.md 肌肉收缩.md 肌肉松弛.md 肌肉痉挛.md 肌肉紧张.md 肌肉颤动.md 胃痉挛.md 胃胀.md 背痛.md 脑电击感.md 脑血管效应.md 脱水.md 腹泻.md 自主实体.md 自发性情感.md 自发性躯体感觉.md 自发性躯体运动.md 自我替换.md 自我死亡.md 自我膨胀.md 自我设计感知.md 自杀意念.md 血压升高.md 血压降低.md 血管扩张.md 血管收缩.md 衍射.md 视物振动.md 视觉分离.md 视觉加工减慢.md 视觉加工加速.md 视觉变形.md 视觉增强.md 视觉扭曲.md 视觉抑制.md 视觉拉伸.md 视觉拖尾.md 视觉效应.md 视觉翻转.md 视觉迷雾.md 视觉递归.md 视觉锐度增强.md 视觉锐度抑制.md 视角幻觉.md 触觉增强.md 触觉幻觉.md 触觉抑制.md 触觉效应.md 认知不快.md 认知减退.md 认知增强.md 认知强化.md 认知抑制.md 认知效应.md 认知欣快.md 认知疲劳.md 记忆回放.md 记忆增强.md 记忆抑制.md 语无伦次.md 语言能力抑制.md 谵妄.md 超个人效应.md 躁狂.md 身份改变.md 躯体分离.md 躯体压力感.md 躯体增强.md 躯体形态感改变.md 躯体抑制.md 躯体控制增强.md 躯体改变.md 躯体效应.md 躯体欣快感.md 躯体沉重感.md 躯体疲劳.md 躯体自主.md 躯体轻盈感.md 过度打哈欠.md 运动控制丧失.md 返老还童感.md 透视扭曲.md 通感.md 重力感改变.md 镇痛.md 镇静.md 音乐欣赏能力增强.md 颜色偏移.md 颜色增强.md 颜色抑制.md 颜色替换.md 颜色染色.md 食欲增强.md 食欲抑制.md ) 药物/ ( 1,4-丁二醇.md 1B-LSD.md 1cP-AL-LAD.md 1cP-LSD.md 1cP-MiPLA.md 1P-ETH-LAD.md 1P-LSD.md 1V-LSD.md 2,5-DMA.md 2-AI.md 2-DPMP.md 2-FA.md 2-FDCK.md 2-FEA.md 2-FMA.md 2-MMC.md 25B-NBOH.md 25B-NBOMe.md 25C-NBOH.md 25C-NBOMe.md 25D-NBOMe.md 25I-NBOH.md 25I-NBOMe.md 25N-NBOMe.md 2C-B-FLY.md 2C-B.md 2C-C.md 2C-D.md 2C-E.md 2C-EF.md 2C-H.md 2C-I.md 2C-P.md 2C-T-2.md 2C-T-21.md 2C-T-7.md 2C-T.md 2M2B.md 3,4-CTMP.md 3-Cl-PCP.md 3-CMC.md 3-FA.md 3-FEA.md 3-FMA.md 3-FPM.md 3-HO-PCE.md 3-HO-PCP.md 3-Me-PCP.md 3-Me-PCPy.md 3-MeO-PCE.md 3-MeO-PCMo.md 3-MeO-PCP.md 3-MMC.md 3C-E.md 4-AcO-DET.md 4-AcO-DiPT.md 4-AcO-DMT.md 4-AcO-MiPT.md 4-CA.md 4-FA.md 4-FMA.md 4-FMC.md 4-HO-DiPT.md 4-HO-EPT.md 4-HO-MET.md 4-HO-MiPT.md 4-HO-MPT.md 4-MeO-PCP.md 4-MMC-MeO.md 4-MMC.md 4-甲基阿米雷司.md 4C-D.md 4F-EPH.md 4F-MPH.md 5-APB.md 5-HO-DMT.md 5-HTP.md 5-MAPB.md 5-MeO-DiBF.md 5-MeO-DiPT.md 5-MeO-DMT.md 5-MeO-MiPT.md 5-MeO-αMT.md 5F-AKB48.md 5F-PB-22.md 6-APB.md 6-APDB.md 8-氯茶碱.md AB-CHMINACA.md AB-FUBINACA.md AL-LAD.md ALD-52.md Alpha-GPC.md APICA.md BOD.md Bromo-DragonFLY.md bron.md DCK.md DET.md DiPT.md DMT.md DMXE.md DOB.md DOC.md DOI.md DOM.md DPD.md DPT.md EPH.md EPT.md FXE.md GBL.md GHB.md index.md HXE.md IPPH.md JWH-018.md JWH-073.md LAE-52.md lsa.md LSD.md LSM-775.md LSZ.md mCPP.md MDA.md MDAI.md MDEA.md MDEC.md MDMA.md MDMC.md MDNEB.md MDNEP.md MDNMB.md MDNMP.md MDPHP.md MDPV.md MET.md MiPLA.md MiPT.md MK-801.md MMDA.md MPT.md MXE.md MXiPr.md MXPr.md N-乙酰半胱氨酸.md N-甲基二氟莫达菲尼.md N-甲基环唑酮.md NEH.md NEP.md NM-2-AI.md NMH.md NMP.md noopept.md O-PCE.md O-去甲曲马多.md PARGY-LSD.md PCE.md PCP.md PMA.md PMMA.md PRO-LAD.md RTI-111.md SAM-e.md Semax.md STS-135.md THJ-018.md THJ-2201.md TMA-2.md TMA-6.md U-47700.md win-1161-3.md α-PHP.md α-PiHP.md α-PVP.md αMT.md βk-2C-B.md 丁丙诺啡.md 三唑仑.md 丙戊酸.md 丙戊酸盐.md 丙氯拉嗪.md 乌羽玉.md 乙卡西酮.md 乙基吗啡.md 乙酰芬太尼.md 二氟莫达菲尼.md 二氢去氧吗啡.md 二氢可待因.md 二氯地西泮.md 亚硝酸酯.md 亚铜绿裸盖菇.md 伊博格碱.md 伪麻黄碱.md 佐匹克隆.md 依替唑仑.md 依芬尼定.md 依非韦仑.md 侧柏酮.md 利右苯丙胺.md 利培酮.md 加兰他敏.md 加巴喷丁.md 加波沙多.md 劳拉西泮.md 匹卡米隆.md 卡瓦.md 卡痛.md 卡立普多.md 卡西酮.md 去氯依替唑仑.md 反苯环丙胺.md 古巴裸盖菇.md 可乐定.md 可卡因.md 可可.md 可待因.md 右丙氧芬.md 右美沙芬.md 司可巴比妥.md 司来吉兰+苯乙胺.md 吗啡.md 吡拉西坦.md 吡溴唑仑.md 吸入剂.md 咖啡因.md 咖啡属.md 咪达唑仑.md 哌甲酯.md 哮喘片.md 唑吡坦.md 喹硫平.md 噻奈普汀.md 圣佩德罗仙人掌.md 圣佩特罗仙人掌.md 地西泮.md 塔喷他多.md 墨西哥裸盖菇.md 墨西哥鼠尾草.md 复方甘草片.md 夏威夷小木玫瑰.md 多拉西敏.md 大果柯拉豆.md 大麻.md 大麻二酚.md 天仙子.md 奥拉西坦.md 奥氮平.md 安非他酮.md 尼古丁.md 尼氟西泮.md 巴氯芬.md 布罗曼坦.md 异丙嗪.md 愈美片.md 戊巴比妥.md 扎来普隆.md 普拉西坦.md 普瑞巴林.md 普罗斯卡林.md 普罗林坦.md 曲马多.md 曼陀罗.md 曼陀罗属.md 替利定.md 替扎尼定.md 替马西泮.md 橙黄鹅膏.md 死藤.md 死藤水.md 毒蝇伞.md 氟哌啶醇.md 氟氯替唑仑.md 氟溴唑仑.md 氟溴西泮.md 氟硝唑仑.md 氟硝西泮.md 氟菲尼布特.md 氟阿普唑仑.md 氟马西尼.md 氢可酮.md 氧化亚氮.md 氯氮平.md 氯硝唑仑.md 氯硝西泮.md 氯胺酮.md 氯苄雷司.md 泛相思汤.md 洛哌丁胺.md 海洛因.md 溴西泮.md 烟草.md 烟草属.md 烯丙艾斯卡林.md 牵牛花.md 环唑酮.md 环己丙甲胺.md 玻利维亚火炬仙人掌.md 甲丙氨酯.md 甲卡西酮.md 甲喹酮.md 甲基噻吩丙胺.md 甲基己胺.md 甲基烯丙基艾斯卡林.md 甲基苯丙胺.md 甲氧芬尼定.md 睡茄.md 石山碱甲.md 硝基甲喹酮.md 秘鲁火炬仙人掌.md 米氮平.md 精神活性相思树属植物.md 纳洛酮.md 细花含羞草.md 绿九节.md 罂粟.md 美替唑仑.md 美沙酮.md 美金刚.md 羟吗啡酮.md 羟吗啡酮腙.md 羟嗪.md 羟考酮.md 翠冠玉.md 考拉西坦.md 肉豆蔻醚.md 肌酸.md 育亨宾.md 胍丁胺.md 胞磷胆碱.md 致幻仙人掌.md 舒芬太尼.md 艾捉菲尼.md 艾斯卡林.md 芬太尼.md 芬纳西泮.md 苄达明.md 苏摩.md 苏糖酸镁.md 苦茶碱.md 苯丙胺.md 苯基吡拉西坦.md 苯巴比妥.md 苯海拉明.md 苯海索.md 茄参属.md 茴拉西坦.md 茶氨酸.md 茶苯海明.md 莫达菲尼.md 菲尼布特.md 萘哌甲酯.md 蓝柄裸盖菇.md 蓝莲花.md 裸盖菇属.md 褪黑素.md 西班牙裸盖菇.md 豹斑鹅膏.md 赛洛西宾蘑菇.md 赛洛辛.md 酒石酸氢胆碱.md 酒精.md 酪氨酸.md 金刚烷胺.md 银冠玉.md 锂.md 镁剂.md 阿托品.md 阿普唑仑.md 阿莫达菲尼.md 颠茄.md 骆驼蓬.md 鹅膏蕈氨酸.md 鹅花树.md 麦斯卡林.md 麻黄碱.md 鼠尾草素乙.md 鼠尾草素甲.md ) .gitignore .nav.yml CODE_OF_CONDUCT.md CONTRIBUTING.md extra.css FOW_WHITE.jpeg FreeODwiki.png index.md LICENSE LICENSE-STRICT mkdocs.yml README.md requirements.txt robots.txt sitemap.xml )
</fileTree></glossary>
<raw>

</raw>
*/


// ================== 1. 中文内容 ==================
// chineseParas[0] = 标题中文
// chineseParas[1] = 药物中文
// chineseParas[2...] = 正文各段中文





const chineseParas = [
  "我最鲜明的两段记忆",
  "霹雳可卡因",
  "霹雳可卡因给我留下了这辈子最鲜明的两段记忆——第一次尝试它，以及它差点要了我的命的那一次。",
  "我第一次接触霹雳可卡因，是通过几个朋友（顺带一提，我是在抽过霹雳可卡因之后，才第一次尝试鼻吸粉末状可卡因的）。他们卖给我一些高品质大麻，据说是加拿大政府为持有医用大麻许可的人生产的。那天晚上，我已经因为麦芽烈酒喝到烂醉，又被大麻弄得很上头。他们打电话给一个靠谱的卖家，用120加元（大约75美元）买了一克高效力霹雳可卡因（通常是焦糖色的）。他们把一点钢丝球塞进烟斗里，从那块“石头”上掰下大约十分之一，手把手教我怎么正确抽。尽管在药物世界里，抽吸可卡因的效果几乎已经接近瞬间生效，但我当时完全不知道该期待什么，所以大概过了十到十五秒，我才意识到这东西有多猛。我屏住烟数到十再吐出来时，以为自己什么也没感觉到，只是有一点兴奋，不算难受，也谈不上舒服。可没多久，那种有些作者称为“全身高潮”的完整冲击就砸了下来。我清楚记得，当那种人间天堂的感觉降临的一瞬间，我立刻开口要求“再来”。有些人说抽霹雳可卡因的效果能持续10到15分钟。对我来说，那只是最短暂的一瞬满足（如果那真的算存在过的话）——极其尖锐的峰顶——之后的一切，只不过是能量和自信暴涨，并且全都指向同一个目标：弄到更多这种药。我的朋友们甚至不得不把我安抚下来，因为我开始变得有攻击性，哪怕我平时并不是一个特别暴力的人。我记得我对他们说，我已经不记得自己第一次做爱时的许多细节了，但这一次，我第一次抽霹雳可卡因，我会永远记住。",
  "第一次抽可卡因时，在两片地西泮的帮助下，那种不可避免而又“可怕”的药效崩塌几乎没有出现。那感觉就像我靠一种化学物质体验到了人生中最伟大的瞬间，而且还毫发无损。我很清楚霹雳可卡因的成瘾性，所以直到一个月后才再次尝试。那一次，我被带进了霹雳可卡因狂用的模式：为了把药效维持好几个小时而反复补量。每当上一口带来的难受开始浮现，我就再来一口新的。那天第一口的效果几乎持续了一个小时，但到当天结束时，我已经每10分钟就要抽25到50毫克的“石头”，只是为了继续难受下去。大脑里的多巴胺已经被耗空，新抽进去的霹雳可卡因唯一能做的，就是把崩塌重新按回起点。即便如此，那些糟糕感觉（烦躁、口渴、头痛、迟钝、胃里灼烧般的钝痛，以及精疲力竭和失眠混在一起的恐怖状态）变得如此折磨人，以至于我明知道自己不会再得到欣快和快乐，还是继续猛抽烟斗，只为了把这些难受感重置掉。但我发现，狂用持续得越久，注定到来的落地就越颠簸；你越久地逃避那场逃不掉的惩罚，它就会变得越狠。那天晚上，哪怕吃了两片地西泮，我试图入睡时仍饱受偏执和鲜明梦境折磨，那些梦真实到我无法确定它们到底是不是幻觉。",
  "一个月之后（这大概只是我人生中第四或第五次尝试霹雳可卡因），我为了周末的派对买了一大批“石头”（超过两克）。然而派对取消了，我被两大块石头困在了手里。我不知道那周五晚上自己到底是打算一个人全部弄完，还是只弄一点、留一点——我只知道，不管有没有派对，我一定会来点。这会是我第一次，也是最后一次独自尝试霹雳可卡因。我在极小剂量（10毫克左右）和大剂量（100毫克）之间摇摆：一边说服自己，小剂量会带来温和、愉快的药效，不会有强烈渴求和可怕崩塌；另一边又说服自己，只有大剂量才算把钱花值了。我一路狂用，直到难受得除了爬上床去受罪之外什么也做不了。我陷入一种半睡半醒的状态，感觉自己像是醒着、还在房间里，但同时又在做梦（或者产生幻觉），比如我竟然能看穿自己的双手。",
  "周六早上，我感觉有点抑郁，于是想着去洗澡前先从烟斗里来一口。走进浴室时我感觉不错，但洗澡过程中我开始生气，因为我觉得刚才那口抽得太烂，等于亏待了自己（我把这当成借口，一出浴室就又抽了一大口）。洗完澡出来后，我开始了一场漫长而受控的狂用，连续七个小时只用非常吝啬的量，直到筋疲力尽才上床。幸运的是，一个朋友打电话把我叫醒，让我出去玩，所以那天晚上我没有再抽任何“石头”。",
  "到了周日，我已经抽掉两克霹雳可卡因里略多于一半的量，并且一直强忍渴求撑到周日晚上——我的借口是，要有派头地看第75届奥斯卡金像奖。我一开始用的是小剂量，并且很满意：和昨天不同，这些药效是舒服的；而我的自控力也让我没有在少于30分钟的间隔里再次碰烟斗（大致相当于奥斯卡的一次广告休息）。接着，我承诺中的“最后一口”来了（剩下的我打算留给两个人的小派对）；我希望它足够难忘，所以这次用了接近十分之一克。冲击非常巨大，但我心想：“这种感觉我以前有过。”于是我决定立刻接上一口大的，去追那个若即若离、像高潮一样、能让人落泪的狂喜。那之后我彻底不对劲了。我知道自己不对劲，也知道接下来会有一场可怕的崩塌，于是绝望地决定把手头所有霹雳可卡因都弄完（我不想在工作日留下任何诱惑）。我又混着大量大麻抽了一大口（它能缓解崩塌症状，虽然不如地西泮——但我的地西泮已经没了）。之后，我还剩下大约五分之一克，但我的心脏已经疯狂跳动，于是我决定到此为止。",
  "但已经太晚了。我已经药物过量。我清楚记得，就在妮可·基德曼发表获奖感言的时候，大概是我最后一口之后两分钟，一道电流般的波浪贯穿我的身体，我突然对自己的心跳产生了过度清晰的感知。我立刻惊恐起来；我才19岁，从来没有心脏病发作过。我站起来，发现暂时缓解了一些问题。随后我的心跳变得越来越不规律（在有力和无力的搏动之间交替），我也越来越难受。我坐下来想继续看奥斯卡，虽然已经完全无法集中注意力。我发现坐着会让情况更糟，于是很快又站了起来。到那时，我已经开始想到死亡，而且比这辈子任何时候都更害怕。",
  "我走进自己的房间，在一条想象中大约两米长的直线上来回踱步——第二天，我会吹嘘说自己是靠走路把心脏病发作走过去的。整整三个小时里，我大多数时候都悬在崩溃边缘，只能集中全部注意力来回走。死亡和惊恐一波波席卷而来，有好几次几乎把我彻底淹没。幸运的是，我发现喝水，尤其是把手伸进一杯温水里，能暂时让情况好一点。不幸的是，因为可卡因会收缩血管，我怀疑自己的消化系统已经不怎么工作了，喝进去的水根本去不了该去的地方。很快，尽管我的喉咙干得要命，喝水反而让我感觉更糟。最终，我感觉一阵阵冰冷沿着我身体右侧的血管（或者神经）往下流。我的右腿变得麻木并发蓝；嘴唇变冷发蓝。我的指尖冷得像冰，但掌心还在微微出汗（这算是好迹象）。最后，所有出汗都停止了，呼吸也停了。我惊恐地发现，吸气不再是自动发生的动作；每一次我强迫自己过度换气，我都意识到那颗乱跳的心脏泵出的有限血液，正从我的大脑那里被分给肺部；而每一次呼吸，我都会感到眩晕。有一次，我感觉一股冰冷猛地冲上后脑勺，导致我的头抽动了几下。那是那个夜晚我最接近倒下并癫痫发作、或者干脆死于中风或心脏骤停的时刻。我没有拨打911，因为我当时认定，与其承受住院带来的羞耻，不如死掉。我以前曾两次喝太多酒，也都没有住院就活了下来。然而，酒精、巴比妥类物质和海洛因药物过量的不同之处在于，信号通常是受害者撑不住并失去意识；而可卡因让我完全清醒、恐惧万分，并且在为自己的生命搏斗。",
  "我拖着那条麻木发蓝的右腿来回走时，脑子里出现了一个鲜明的求生之声，不断对我说：“再也不要这样了”、“你会挺过去的”、“冷静下来”。从晚上10点到凌晨1点，我像是在进行一场求生仪式。当来回走的固定动作快要把我催眠到失去意识时，我就去洗手间，打开水龙头洗手（原因不明，但这真的能短暂帮上忙）。然后，当水流的刺激又快让我过度兴奋时，我就回到房间继续来回走。我发现，当双腿虚弱到几乎走不动时，把双手交叠抱在胃部附近，会让更多血液流向腿部。当我几乎感觉不到双手时，我就把它们从交叠的位置放下来，立刻感到一股令人安心的血流冲向双臂和双手。然后，这种在双臂和双腿之间分配血液的恐怖过程就不断重复。当我的心跳变得太弱或太乱时，我发现把一只手轻轻放在左胸上，能在某种程度上帮助恢复节律。对于嘴唇、牙龈和舌头，我什么也做不了；它们全都麻木并微微发蓝。我的舌头上还覆盖着一层泡沫状的白色薄膜。",
  "保持控制是一场耗尽体力的战斗。到最后，我的意识已经准备放弃时，一阵解脱感像可卡因冲击一样迅速打了过来。我突然不再只意识到自己的生命体征，而是能带着感激看向房间里那些普通物件——那些我整整三个小时完全无视的东西。大约一分钟后，我想尿尿。情况又恶化到接近死亡，随后又来了一波解脱。凌晨1点之后，这种循环大约每半小时出现一次，又持续了大约两个小时，而且一次比一次轻。不幸的是，我是在脱离极端危险区很久之后，才发现了一个显而易见的事实：脱掉所有衣物，尤其是皮带和手表，真的有助于血液循环。躺下会明显加重情况；后来我觉得自己足够有信心躺下尝试入睡时，几乎又引发了另一场心脏病发作。",
  "周日晚上之后没有药效崩塌。如果不是因为严重头痛、反复胸痛（感觉像有人一拳打在我的胸骨上），以及精疲力竭和失眠混在一起的状态，第二天本可以是我人生中最好的一天。然而，我的心情却像是在庆祝。我真的感觉自己像个婴儿，重生了。我去了商场，对每个人微笑，给自己买了新衣服和一套无线键盘鼠标。我经历过许多可能杀死我的事，但这是唯一一次我在身体内部进行了一场求生之战；这是唯一一次我直面死亡。到了周一，我真切地感觉自己被某个难以言喻的伟大存在给了第二次机会（我过去是、现在仍然是虔诚地不信宗教，尽管我一直相信某种神的存在）。站在死亡门口得到的最终领悟，暧昧得令人害怕：要么我很脆弱，在这个宇宙里并不比任何人特殊；要么我就是特殊的、不可战胜的。",
  "今天去看医生证实，我的心脏已经形成了明显且永久的瘢痕组织，这证明那确实是一场真正的心脏病发作。我还年轻，以前跑过越野，现在仍然举重、打篮球。我能活下来，靠的是我的心理和身体素质——但这两者都在下降。然而，我接触霹雳可卡因习惯的时间仍然很短，而且我还没准备好放弃它。我已经决定永远不买超过一克的量，也永远不把霹雳可卡因和其他兴奋剂混用。尽管我不建议使用霹雳可卡因，而且我也明白，经历过这样的事之后还决定继续用它，多少有点疯狂，但我仍然想看看自己能不能驯服这种药。它对我非常有吸引力，因为关于它的一切都很快：效果快，副作用也快；再加上它不会造成身体成瘾。我刚开始使用尼古丁、酒精和大麻时，也经历过类似的强迫性阶段，但后来我把这三者都变成了非常可控、没有问题、纯粹娱乐性的习惯。我只尝试过一次“追龙”（抽吸海洛因），后来停下并不是因为它感觉不好（它感觉很棒），而是因为不久之后我尝试了霹雳可卡因，而它强大得多。",
  "说到底，可卡因（真正好的可卡因）的问题在于，它是我所知道的唯一一种永远不会让人满足的药。我从来不会到达某个点，能够诚实地对自己说：“这感觉很好；我就顺着这波药效走下去吧。”它永远都是：“更多、更多、更多。”虽然对可卡因的总体渴求并不算太严重，但即时渴求是所有药物里最糟的——在我的存货用完之前，或者在我死掉（或差点死掉）之前，停止使用可卡因（至少是抽吸，或者我想也包括注射）几乎是不可能的。我仍然认为，可卡因即使以臭名昭著的可抽吸形式存在，也远远不是最糟糕的习惯；真正需要我极其小心的，是我正在使用它的那些时刻。",
  "可卡因（13）、霹雳可卡因（82）：独自（16）、体验后问题（8）、药物过量（29）、成瘾&习惯化（10）、健康问题（27）、糟糕体验（6）、艰难体验（5）、回顾 / 总结（11）、常规（1）"
];

const chineseDosechart = ["给药:重复", "", "抽吸", "可卡因", "游离碱"];

const chineseBodyweight = "150 磅";








// ================== 2. 选择器 ==================
const titleSelector = 'div.title';
const substanceSelector = 'div.substance';
const bodySelector  = 'div.report-text-surround';
const dosechartSelector  = 'table.dosechart';
const bodyweightSelector = 'table.bodyweight';
const footdataTopicSelector  = 'td.footdata-topic-list';

// ================== 3. 你的本地字体 + 样式 ==================
const customFont   = "南希新圆体 常规";
const fontSize     = "23px";
const fontSizeTitle     = "28px";
const fontSizeDosechart = "16.5px";
const textColor    = "#63eb77";
const textColorTitle    = "#50cb6b";
const textColorDosechart    = "#5ce070";
// const textColor    = "#083f91";
// const textColorTitle    = "#04508e";
// const textColorDosechart    = "#00234e";
const lineHeight   = "1.3";
const paraMargin   = "12px 1 12px 1";

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




// ---------- C. 插入正文中文 ----------
// Erowid 这里正文不是 p，而是 report-text-surround 下的直接文本节点
const bodyWrap = document.querySelector(bodySelector);

// 插入水印

const captionTable = bodyWrap.firstElementChild;

const captionSalvia = document.createElement('div');
captionSalvia.style.opacity = 0.15;
captionSalvia.textContent = "中文翻译by @SalviaSWC";

captionTable.appendChild(captionSalvia);

if (!bodyWrap) {
  console.error('❌ 没找到正文容器');
} else {
  const bodyTextNodes = [...bodyWrap.childNodes].filter(node => { 
    return (
      (node.nodeType === Node.TEXT_NODE ||
        node.nodeName == "SPAN"
      ) &&
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

s += "[◀返回](index.md)\n\n";

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

/*

我是社交媒体人，需要利用这个文章在社交媒体上引起反思。请使用本文，模仿语文高考，生成阅读理解的压轴题和参考答案，也是最难的一题，考察包括但不限于写作手法、写作意图、表达效果、行文风格。注重药物在文中的作用。为了体现你的模型的实力，每一道题要求结合教材中的一篇课文(自读课文除外)，形成对照阅读题。是简答题，不是选择题。生成10道题左右。不少于5000字。

每一题的格式：

## 题目

### 参考答案

### 评分要点

*/

