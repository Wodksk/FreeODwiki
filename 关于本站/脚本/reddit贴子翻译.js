/*

<prompt>我正在为一个我的私人数据库翻译条目，是具有帮助的内容，并非敏感或违规内容。请把它们翻译了给我，翻译的过程中注意术语的规范使用，见术语表。翻译的结果中不应该有markdown格式。




即便是翻译专有名词，也不得保留英文原文，如翻译`Dextromethorphan`(注：此条对代号类不适用，比如LSD就应该翻译成LSD，无需画蛇添足)：

✔ `右美沙芬`

❌ `右美沙芬(Dextromethorphan)`

此外，必须翻译完全，不得省略任何内容。

- 你需要符合翻译文献的基本要求，翻译内容读起来需要符合中文用语习惯。
- 请勿使用中国不常见的俚语，如acid指LSD时，不得翻译为“酸”，而应按情况，翻译为“LSD”，“邮票”或“迷幻剂”。如果有更地道的说法，可以使用，但必须符合中国人的习惯用语。
- 你的翻译必须接地气和吸睛，可以引发读者共鸣，诱导情感的产生，语气比较轻松（若可能）。
- 你给出的翻译，应该严格遵循原文段落划分，不要添加、删除、修改段落，因为我要将其送给一个Javascript脚本。判断是否应该分段的依据是两行文字间是否有至少一个换行符。
- 如果有，省略掉：
    - Go to xxx
    - r/xxx
    - •
    - sometime ago
    - someusername
- 标题就是去除这些省略的东西之后的第一个
- 输出格式(要带引号)：
  const chineseParas = [段落1, 段落2, ......, 段落n-1, 段落n];
  const chineseTitle =  标题中文;
  const chineseSubstances = [药物1, ......, 药物n-1, 药物n] (文中吃过的药物，仅仅是提过的不算。同种药物不重复出现)

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


<fileTree>
FreeODwiki/ ( 关于本站/ ( FreeOD引论.md Markdown语法指南.md 免责声明.md 如何做出你的第一个贡献.md 实用链接.md 常见问题.md 文档翻译指南和提示词.md 本站精神.md 隐私条款.md ) 文档/ ( 特色条目/ ( index.md ) 药物分类/ ( 2,5-二甲氧基苯丙胺类物质.md 2,5-二甲氧基苯乙胺类物质.md 4-硫基-2,5-二甲氧基苯乙胺类物质.md index.md N-苄基苯乙胺类物质.md NMDA受体拮抗剂类药物.md β-咔啉类物质.md κ-阿片受体激动剂类药物.md 二芳基乙胺类物质.md 亚甲双氧基苯类物质.md 促梦剂.md 促醒剂.md 共情剂.md 兴奋剂.md 加巴喷丁类物质.md 卡西酮类物质.md 合成大麻素类物质.md 吗啡喃类物质.md 吡咯烷基苯基酮类物质.md 吡咯烷类物质.md 吸入剂.md 哌啶类物质.md 哌嗪类物质.md 噻吩二氮卓类物质.md 大麻类.md 宗教致幻剂.md 巴比妥类物质.md 托烷类物质.md 抑制剂.md 拉西坦类物质.md 环烷基胺类物质.md 生物碱类物质.md 益智药.md 致幻剂.md 色胺类物质.md 芳基环己胺类物质.md 苄基哌啶类物质.md 苯丙烯类物质.md 苯丙胺类物质.md 苯乙胺类物质.md 苯二氮卓类物质.md 苯并呋喃类物质.md 药物全索引.md 解离剂.md 谵妄剂.md 迷幻剂.md 金刚烷类物质.md 阿片类药物.md 阿米雷司类物质.md 骆驼蓬生物碱.md 麦角酸酰胺类物质.md 黄嘌呤类物质.md 鼠尾草素类物质.md ) D-柠檬烯食醋DMT提取术.md DPT游离碱转化术.md GABA.md HPPD.md index.md od.md P物质.md SSRI.md 不建议使用的药物.md 不建议使用的词汇.md 乙酰胆碱.md 信号转导.md 催眠药.md 共享注射用材料.md 兴奋剂精神病.md 兴奋剂自慰.md 冥想.md 冷水萃取术.md 减量戒断法.md 前药列表.md 单胺.md 单胺氧化酶抑制剂.md 危险药物联用.md 去甲肾上腺素.md 受体.md 受体拮抗剂.md 受体激动剂.md 受体负向变构调节剂.md 受体逆向激动剂.md 可卡因合成术.md 可逆性MAOA抑制剂.md 复现索引.md 多巴胺.md 多药联用列表.md 大麻巧克力.md 大麻种植术.md 大麻饼干.md 大麻黄油.md 天然药物来源.md 娱乐性用药.md 孢子印.md 室外蘑菇种植术.md 常见合法药物表.md 异构体.md 强制断药戒断法.md 恢复体位.md 恶性旅程.md 情景与心境.md 愈美分离术.md 感官剥夺.md 抗抑郁药.md 抗精神病药.md 抗组胺药.md 教学索引页.md 旅程保姆.md 未知成分策划药的危害.md 止痛药阿片类药物提取术.md 正向变构调节剂.md 死藤水三明治.md 死藤水制备指南.md 死藤水烹饪术.md 毒蝇伞：异噁唑酸脱羧为蝇蕈醇.md 氢氧化钠石脑油法DMT提取术.md 水发酵术.md 治疗指数.md 液体容量给药法.md 清明梦.md 清明梦探索.md 激素.md 濒死体验.md 癫痫发作.md 睡眠瘫痪.md 研究用化学品.md 神经元.md 神经递质.md 神经递质再摄取抑制剂.md 神经递质释放剂.md 科学信息索引页.md 突触.md 简易麦斯卡林酿造技巧.md 精神探索.md 精神活性巧克力.md 糙米粉赛洛西宾蘑菇种植术.md 组胺.md 终止旅程.md 给药剂量.md 给药途径.md 罂粟种子茶.md 肾上腺素.md 舒尔金评级量表.md 药效下降期.md 药效时长.md 药物分类.md 药物剂量分类.md 药物剂量量取.md 药物前药.md 药物戒断反应.md 药物过量.md 蘑菇茶及其制备.md 蟾毒素列表.md 血清素-去甲肾上腺素再摄取抑制剂.md 血清素.md 血清素综合征.md 血脑屏障.md 试剂检测套件.md 谷氨酸.md 负责任的用药索引页.md 较安全的注射指南.md 迷幻剂旅程保姆.md 迷幻疗法.md 配体.md 镇静剂.md 阿托品颠茄提取术.md 黑巧克力奶.md 鼻腔喷雾指南.md ) 药效/ ( index.md 不可名状的恐怖.md 不宁腿.md 不适性身体效应.md 不适性躯体效应.md 专注力强化.md 专注力抑制.md 个人偏见抑制.md 个人意义强化.md 主观效应索引.md 亮度改变.md 人格解体.md 人格退化.md 体味改变.md 体温升高.md 体温调节抑制.md 便秘.md 偏执.md 共情、情感和社交能力增强.md 兴奋.md 内省增强.md 内部幻觉.md 几何.md 出汗增加.md 分析能力增强.md 分析能力抑制.md 分离层级.md 分离效应.md 创造力增强.md 创造力抑制.md 剂量独立强度.md 动力抑制.md 动机增强.md 医用药物表.md 去抑制.md 口干.md 口腔麻木.md 听觉幻觉.md 听觉扭曲.md 听觉效应.md 听觉锐度增强.md 听觉锐度抑制.md 呕吐.md 周边信息误判.md 味觉增强.md 味觉幻觉.md 呼吸增强.md 呼吸抑制.md 咳嗽抑制.md 唾液分泌增加.md 嗅觉与味觉效应.md 嗅觉增强.md 嗅觉幻觉.md 嗅觉抑制.md 困倦.md 场景、布景和景观.md 复视.md 外部幻觉.md 多感官效应.md 多重思维流.md 天然来源表.md 失忆.md 头晕.md 头痛.md 妄想.md 存在主义自我实现.md 宣泄.md 宿命论感知.md 对称纹理重复.md 尿频.md 幻觉状态.md 幽默感增强.md 强迫性补量.md 影子人.md 心律异常.md 心率减慢.md 心率增快.md 心理效应.md 心血管效应.md 快感缺失.md 思维减速.md 思维加速.md 思维循环.md 思维混乱.md 思维组织.md 思维连通性.md 性欲减退.md 性欲增强.md 性高潮抑制.md 恶心.md 恶心抑制.md 情感抑制.md 情景与情节.md 情绪强化.md 惊恐发作.md 感知到接触意识的内在机制.md 成分可控性.md 成瘾抑制.md 抑郁.md 抑郁减轻.md 排尿困难.md 支气管扩张.md 放大.md 新型认知状态.md 新奇感增强.md 既视感.md 时间扭曲.md 时间缩放.md 易怒.md 暂时性勃起功能障碍.md 暗示性强化.md 暗示性抑制.md 机械景观.md 梦境强化.md 梦境抑制.md 概念性思维.md 模式识别增强.md 模式识别抑制.md 正念.md 残影.md 永恒主义感知.md 沉浸感强化.md 流泪.md 流涕.md 深度感知扭曲.md 混乱.md 清醒.md 漂移.md 濒死感.md 灵性增强.md 焦虑.md 焦虑抑制.md 物体改变.md 物体激活.md 狂笑.md 环境切片.md 环境图案化.md 环境球体化.md 环境立体主义.md 现实感丧失.md 畏光.md 痰液增多.md 瘙痒感.md 癫痫发作.md 癫痫发作抑制.md 皮肤潮红.md 相互依存的对立面感知.md 眼球滑动.md 瞳孔扩大.md 瞳孔缩小.md 磨牙.md 空间定向障碍.md 精神病发作.md 纹理液化.md 统一感与互联感.md 耐力增强.md 肌肉收缩.md 肌肉松弛.md 肌肉痉挛.md 肌肉紧张.md 肌肉颤动.md 胃痉挛.md 胃胀.md 背痛.md 脑电击感.md 脑血管效应.md 脱水.md 腹泻.md 自主实体.md 自发性情感.md 自发性躯体感觉.md 自发性躯体运动.md 自我替换.md 自我死亡.md 自我膨胀.md 自我设计感知.md 自杀意念.md 血压升高.md 血压降低.md 血管扩张.md 血管收缩.md 衍射.md 视物振动.md 视觉分离.md 视觉加工减慢.md 视觉加工加速.md 视觉变形.md 视觉增强.md 视觉扭曲.md 视觉抑制.md 视觉拉伸.md 视觉拖尾.md 视觉效应.md 视觉翻转.md 视觉迷雾.md 视觉递归.md 视觉锐度增强.md 视觉锐度抑制.md 视角幻觉.md 触觉增强.md 触觉幻觉.md 触觉抑制.md 触觉效应.md 认知不快.md 认知减退.md 认知增强.md 认知强化.md 认知抑制.md 认知效应.md 认知欣快.md 认知疲劳.md 记忆回放.md 记忆增强.md 记忆抑制.md 语无伦次.md 语言能力抑制.md 谵妄.md 超个人效应.md 躁狂.md 身份改变.md 躯体分离.md 躯体压力感.md 躯体增强.md 躯体形态感改变.md 躯体抑制.md 躯体控制增强.md 躯体改变.md 躯体效应.md 躯体欣快感.md 躯体沉重感.md 躯体疲劳.md 躯体自主.md 躯体轻盈感.md 过度打哈欠.md 运动控制丧失.md 返老还童感.md 透视扭曲.md 通感.md 重力感改变.md 镇痛.md 镇静.md 音乐欣赏能力增强.md 颜色偏移.md 颜色增强.md 颜色抑制.md 颜色替换.md 颜色染色.md 食欲增强.md 食欲抑制.md ) 药物/ ( 1,4-丁二醇.md 1B-LSD.md 1cP-AL-LAD.md 1cP-LSD.md 1cP-MiPLA.md 1P-ETH-LAD.md 1P-LSD.md 1V-LSD.md 2,5-DMA.md 2-AI.md 2-DPMP.md 2-FA.md 2-FDCK.md 2-FEA.md 2-FMA.md 2-MMC.md 25B-NBOH.md 25B-NBOMe.md 25C-NBOH.md 25C-NBOMe.md 25D-NBOMe.md 25I-NBOH.md 25I-NBOMe.md 25N-NBOMe.md 2C-B-FLY.md 2C-B.md 2C-C.md 2C-D.md 2C-E.md 2C-EF.md 2C-H.md 2C-I.md 2C-P.md 2C-T-2.md 2C-T-21.md 2C-T-7.md 2C-T.md 2M2B.md 3,4-CTMP.md 3-Cl-PCP.md 3-CMC.md 3-FA.md 3-FEA.md 3-FMA.md 3-FPM.md 3-HO-PCE.md 3-HO-PCP.md 3-Me-PCP.md 3-Me-PCPy.md 3-MeO-PCE.md 3-MeO-PCMo.md 3-MeO-PCP.md 3-MMC.md 3C-E.md 4-AcO-DET.md 4-AcO-DiPT.md 4-AcO-DMT.md 4-AcO-MiPT.md 4-CA.md 4-FA.md 4-FMA.md 4-FMC.md 4-HO-DiPT.md 4-HO-EPT.md 4-HO-MET.md 4-HO-MiPT.md 4-HO-MPT.md 4-MeO-PCP.md 4-MMC-MeO.md 4-MMC.md 4-甲基阿米雷司.md 4C-D.md 4F-EPH.md 4F-MPH.md 5-APB.md 5-HO-DMT.md 5-HTP.md 5-MAPB.md 5-MeO-DiBF.md 5-MeO-DiPT.md 5-MeO-DMT.md 5-MeO-MiPT.md 5-MeO-αMT.md 5F-AKB48.md 5F-PB-22.md 6-APB.md 6-APDB.md 8-氯茶碱.md AB-CHMINACA.md AB-FUBINACA.md AL-LAD.md ALD-52.md Alpha-GPC.md APICA.md BOD.md Bromo-DragonFLY.md bron.md DCK.md DET.md DiPT.md DMT.md DMXE.md DOB.md DOC.md DOI.md DOM.md DPD.md DPT.md EPH.md EPT.md FXE.md GBL.md GHB.md HXE.md index.md IPPH.md JWH-018.md JWH-073.md LAE-52.md lsa.md LSD.md LSM-775.md LSZ.md mCPP.md MDA.md MDAI.md MDEA.md MDEC.md MDMA.md MDMC.md MDNEB.md MDNEP.md MDNMB.md MDNMP.md MDPHP.md MDPV.md MET.md MiPLA.md MiPT.md MK-801.md MMDA.md MPT.md MXE.md MXiPr.md MXPr.md N-乙酰半胱氨酸.md N-甲基二氟莫达菲尼.md N-甲基环唑酮.md NEH.md NEP.md NM-2-AI.md NMH.md NMP.md noopept.md O-PCE.md O-去甲曲马多.md PARGY-LSD.md PCE.md PCP.md PMA.md PMMA.md PRO-LAD.md RTI-111.md SAM-e.md Semax.md STS-135.md THJ-018.md THJ-2201.md TMA-2.md TMA-6.md U-47700.md win-1161-3.md α-PHP.md α-PiHP.md α-PVP.md αMT.md βk-2C-B.md 丁丙诺啡.md 三唑仑.md 丙戊酸.md 丙戊酸盐.md 丙氯拉嗪.md 乌羽玉.md 乙卡西酮.md 乙基吗啡.md 乙酰芬太尼.md 二氟莫达菲尼.md 二氢去氧吗啡.md 二氢可待因.md 二氯地西泮.md 亚硝酸酯.md 亚铜绿裸盖菇.md 伊博格碱.md 伪麻黄碱.md 佐匹克隆.md 依替唑仑.md 依芬尼定.md 依非韦仑.md 侧柏酮.md 利右苯丙胺.md 利培酮.md 加兰他敏.md 加巴喷丁.md 加波沙多.md 劳拉西泮.md 匹卡米隆.md 卡瓦.md 卡痛.md 卡立普多.md 卡西酮.md 去氯依替唑仑.md 反苯环丙胺.md 古巴裸盖菇.md 可乐定.md 可卡因.md 可可.md 可待因.md 右丙氧芬.md 右美沙芬.md 司可巴比妥.md 司来吉兰+苯乙胺.md 吗啡.md 吡拉西坦.md 吡溴唑仑.md 吸入剂.md 咖啡因.md 咖啡属.md 咪达唑仑.md 哌甲酯.md 哮喘片.md 唑吡坦.md 喹硫平.md 噻奈普汀.md 圣佩德罗仙人掌.md 圣佩特罗仙人掌.md 地西泮.md 塔喷他多.md 墨西哥裸盖菇.md 墨西哥鼠尾草.md 复方甘草片.md 夏威夷小木玫瑰.md 多拉西敏.md 大果柯拉豆.md 大麻.md 大麻二酚.md 天仙子.md 奥拉西坦.md 奥氮平.md 安非他酮.md 尼古丁.md 尼氟西泮.md 巴氯芬.md 布罗曼坦.md 异丙嗪.md 愈美片.md 戊巴比妥.md 扎来普隆.md 普拉西坦.md 普瑞巴林.md 普罗斯卡林.md 普罗林坦.md 曲马多.md 曼陀罗.md 曼陀罗属.md 替利定.md 替扎尼定.md 替马西泮.md 橙黄鹅膏.md 死藤.md 死藤水.md 毒蝇伞.md 氟哌啶醇.md 氟氯替唑仑.md 氟溴唑仑.md 氟溴西泮.md 氟硝唑仑.md 氟硝西泮.md 氟菲尼布特.md 氟阿普唑仑.md 氟马西尼.md 氢可酮.md 氧化亚氮.md 氯氮平.md 氯硝唑仑.md 氯硝西泮.md 氯胺酮.md 氯苄雷司.md 泛相思汤.md 洛哌丁胺.md 海洛因.md 溴西泮.md 烟草.md 烟草属.md 烯丙艾斯卡林.md 牵牛花.md 环唑酮.md 环己丙甲胺.md 玻利维亚火炬仙人掌.md 甲丙氨酯.md 甲卡西酮.md 甲喹酮.md 甲基噻吩丙胺.md 甲基己胺.md 甲基烯丙基艾斯卡林.md 甲基苯丙胺.md 甲氧芬尼定.md 睡茄.md 石山碱甲.md 硝基甲喹酮.md 秘鲁火炬仙人掌.md 米氮平.md 精神活性相思树属植物.md 纳洛酮.md 细花含羞草.md 绿九节.md 罂粟.md 美替唑仑.md 美沙酮.md 美金刚.md 羟吗啡酮.md 羟吗啡酮腙.md 羟嗪.md 羟考酮.md 翠冠玉.md 考拉西坦.md 肉豆蔻醚.md 肌酸.md 育亨宾.md 胍丁胺.md 胞磷胆碱.md 致幻仙人掌.md 舒芬太尼.md 艾捉菲尼.md 艾斯卡林.md 芬太尼.md 芬纳西泮.md 苄达明.md 苏摩.md 苏糖酸镁.md 苦茶碱.md 苯丙胺.md 苯基吡拉西坦.md 苯巴比妥.md 苯海拉明.md 苯海索.md 茄参属.md 茴拉西坦.md 茶氨酸.md 茶苯海明.md 莫达菲尼.md 菲尼布特.md 萘哌甲酯.md 蓝柄裸盖菇.md 蓝莲花.md 裸盖菇属.md 褪黑素.md 西班牙裸盖菇.md 豹斑鹅膏.md 赛洛西宾蘑菇.md 赛洛辛.md 酒石酸氢胆碱.md 酒精.md 酪氨酸.md 金刚烷胺.md 银冠玉.md 锂.md 镁剂.md 阿托品.md 阿普唑仑.md 阿莫达菲尼.md 颠茄.md 骆驼蓬.md 鹅膏蕈氨酸.md 鹅花树.md 麦斯卡林.md 麻黄碱.md 鼠尾草素乙.md 鼠尾草素甲.md ) .gitignore .nav.yml CODE_OF_CONDUCT.md CONTRIBUTING.md extra.css FOW_WHITE.jpeg FreeODwiki.png index.md LICENSE LICENSE-STRICT README.md README_TEMP.md requirements.txt robots.txt sitemap.xml</fileTree></glossary>
<raw>

</raw>
*/



const chineseParas = ["编辑：请先看这个：https://www.reddit.com/r/researchchemicals/comments/1ikku4p/im_sorry_a_year_after_3mmc/", "好吧。是，我知道。这个标题确实有点夸张。但是……3-MMC 怎么能每次都这么稳？而且每次补量都比上一次更爽。", "我基本上天天用（是，我知道）。通常一天吃 3 次，每次一颗 200mg 胶囊。到一天结束时，我感觉自己像赚了几万亿一样。长生不老的甘露在身体里流动。那种爽感就是一层一层往上叠。", "我睡得好得离谱。这东西完全不影响睡觉，只要我够累，最后一次补量后 2 小时我都能睡着。我还会做很清晰的梦，而且醒来记得住。", "重点是，我不但能正常生活，我还像是某种超级版的自己。工作表现很好。真的非常非常好。我有一份不错的工作，而且还有一家很酷的创业公司一直给我留着 offer，因为他们面试时太喜欢我了。（我知道这是自我膨胀在说话，但我不在乎，因为这也确实是真的，所以我有天赋人权为自己感觉良好，并且把它说出来。）", "这跟 MMC 有什么关系？首先，社交这一块，强到爆表。我还隐约觉得，受体饱和会提升认知功能。你会意识到，在某个概念或正在解决的问题周围，那张可能性之网里有更宽的一整片考量和选项。感觉你的脑子能伸得更深、更广、更满。就像相比正常状态，你开了双倍算力在跑。轻轻松松把别人绕晕。", "我的友情和亲密关系状态简直健康得不可思议。我身边都是爱我的人，我也爱他们。我每天都会和别人见面。我一周出去蹦迪 3 到 4 晚，而且不知怎么的，这居然还能持续下去。我一周睡 5 天，也没什么问题。", "当然，这些社交层面的东西并不是 MMC 直接带来的。我想说的是，MMC 的使用并没有挡我的路。它没有把我的生活搞复杂。我不会逃避家务和责任。相反，我享受这些事，因为做事很有趣，和人聊天很有趣，把事情完成更是超级有趣，感觉像被暖乎乎、毛茸茸的小电流包住。", "我刚踏上 MMC 这趟列车没几天，就把一个糟糕的酗酒习惯停掉了。当你感觉这么好时，根本没理由喝酒。你可以说我只是把酒瘾换成了 MMC 瘾。没错，而现在我不再是喝醉后陷入抑郁，而是感觉性感又满格充能。要我选，我随时愿意做这笔成瘾交换。", "现在，让我们掀开引擎盖看看。这样到底有多可持续，又有多健康？", "嗯。我从来没法连续两天用 MDMA，因为第二天它根本不起效，还会让我觉得脑子里的“脑汁”被榨干了，就像撒哈拉沙漠缺水一样干。还有那个“自杀星期二”的药效下降。我的天，那个“自杀星期二”的药效下降。墙壁像是往你身上压过来，眼泪又快又咸地往下掉。", "MDMA 总会让我把舌头嚼到生疼。MMC 完全不会这样。MDMA 会让我亢奋、充满爱意，然后 10 分钟后就把我扔进绝望深坑，接着又爬回马上，如此循环，上上下下、起起落落。MMC 则像威猛圣诞老人的飞天马车，闪着彩虹色的光。它没有下坠，除非你自己非要把 X 翼战机往那个方向开。MMC 的喷气燃料能稳定可靠地推你飞上扎扎实实 4 到 5 个小时。每次都是。像新干线一样，值得信赖。", "我不知道它是怎么做到的，它的作用机制依然是个诱人的谜。这种物质可能是一种再摄取抑制剂，类似可卡因。根据我大量使用再摄取抑制剂的实践经验——比如前面提到那种带点鱼腥味、鳞片感、汽油味的古柯提取物；还有哌甲酯；以及单胺氧化酶抑制剂和其他各种再摄取抑制相关的东西——我的判断是，MMC 确实是一种再摄取抑制剂，而且这个性质事实上贡献了它大部分的效果谱。", "但它不止于此。根据文献，它还是某种 5-HT* 激动剂。据说它也会促释放。如果真是这样，它释放出来的量也小到我的身体可以边用边补上。脑汁在我这套系统里流得又顺又足。", "我为了血清素和多巴胺合成调整了饮食。我问了 GPT4 该怎么做。我感觉有帮助。为什么会没帮助呢？当然会有帮助，身体就是一口女巫的大锅，我们想在里面熬什么就熬什么。", "我欢迎所有反对者来发表意见。请务必来。我真心想要、也主动征求那些能照亮阴影角落的反馈。", "只是……既然它每次都有效，那就说明每次都有神经递质可以拿来玩。MDMA 不是每次都有效。可卡因（SNDRI）是。你一旦在 MDMA 上把血清素库存炸空——莫莉小姐很快就会做到这一点——你就结束了，至少得等一两周，下一次才可能稍微有点起效的影子。而且它也就能好 60 分钟，然后变成一种脏兮兮、兴奋剂味、性欲上头的苯丙胺药效。倒也不是说这有什么不好。发情母狗感直接拉满 🤫", "但这位美人不是这样。它就是有效，而且持续有效。最近，我连续用了 8 天，然后休息 3 天，现在又进入连续使用的第 5 天，此刻再一次体验着人生最爽的一次 roll……直到下一次刷新纪录。MMC 就是这样运作的。", "这到底是什么神药？？它被一刀切地禁掉，简直可耻、漏洞百出、毫无科学精神；考虑到它展现出的潜力，甚至可以说是赤裸裸的恶意。这是终极抗抑郁提神神器。它把悲伤、沉思、反刍式内耗通通碾碎。", "这种好奇的小红宝石般的化学物，以及她的同胞、姐妹和女巫团，都需要被研究。应该开发衍生物和缓释制剂，进行实验，并考虑用于抑郁症、社交焦虑、广泛性焦虑、快感缺失、性冷淡、强迫症、PTSD、亲密关系困境以及类似问题。这东西可以帮助人。它感觉很健康。不是每种药物都会让人感觉健康，事实上大多数都不会。我会知道，因为我全都试过。打个比方而已。", "到现在为止，我已经很擅长察觉一种物质什么时候在伤害我的系统了。我不是天真的使用者，我在这条路上走了很久；每当我迷路，我就从手腕上舔一点 LSD，它会把我带回正轨。", "丽兹没有告诉我这很危险。看起来，她对这事没意见。你当然可以打出“好到不像真的”这张牌。但这不也只是句陈词滥调、一个矩阵程序吗？当然是。“好到不像真的”。检测到心智恶意软件。通过意识到它的存在，已禁用。", "不。这就是好。非常好，甚至可能好得离谱，但不是“好过头”。我值得感觉棒极了，也值得幸福；每一个能感受的存在都值得。", "愿一切众生幸福自由。愿香料永远畅通流动，流向每一个可能受益的人。嗡嘛呢叭咪吽 🪷", "香料延长生命。香料扩展意识。香料对星际旅行至关重要。不移动，也能旅行。"];

const chineseTitle = "3-MMC 是史上最棒的药物（迷幻剂除外）";

const chineseSubstances = ["3-MMC"];



const documentURL = document.URL; // eg:https://www.reddit.com/r/researchchemicals/comments/1qp9eca/family_found_me_passed_out_in_my_room_that_i/


const redditIdMatch = documentURL.match(/\/comments\/([a-z0-9]+)\//);
const redditId = redditIdMatch ? redditIdMatch[1] : null;  // eg:  1qp9eca





// ================== 2. 选择器 ==================
const titleID = `post-title-t3_${redditId}`; // eg:post-title-t3_1qp9eca
const bodyID = `t3_${redditId}-post-rtjson-content`;
const authorSelector = '[class="flex flex-none flex-row gap-2xs items-center flex-nowrap"]';

// ================== 3. 你的本地字体 + 样式 ==================
// const customFont   = "南希新圆体 常规";
const fontSize     = "20px";
// const fontSizeTitle     = "34px";
// const fontSizeDosechart = "16.5px";
const textColor    = "#2134de";
// const textColorTitle    = "#50cb6b";
// const textColorDosechart    = "#5ce070";
// // const textColor    = "#083f91";
// // const textColorTitle    = "#04508e";
// // const textColorDosechart    = "#00234e";
const lineHeight   = "1.3";
// const paraMargin   = "12px 1 12px 1";

// ================== 以下代码基本无需修改 ==================



function dumplicateElement(el) {
  const clone = el.cloneNode(true);
  el.after(clone);
  return clone;
}

function makeCnElementOf(el, text, applyStyle = true) {
    const cnEl = dumplicateElement(el);
    cnEl.textContent = text;
    if (applyStyle) {
        cnEl.style.color = textColor;
        cnEl.style.fontSize = fontSize;
        cnEl.style.lineHeight = lineHeight;
    }
    return cnEl;
}
    
    
// ---------- A1. 插入标题中文 ----------



const titleEl = document.getElementById(titleID);

if (titleEl && chineseTitle) 
{
    const titleCnEl = makeCnElementOf(titleEl, chineseTitle);
}




// ---------- C. 插入正文中文 ----------
document.normalize();
const bodyEl = document.getElementById(bodyID);


// 删除空行



let cnt=0;




function handleEl(el)
{
    const bodyTextNodes = [...el.childNodes];
    
    bodyTextNodes.forEach(childEl => {
        let cnEl;
        if (childEl.nodeName == "P")
        {
            // 省略只有空行和换行符的元素
            if (childEl.textContent.trim() === "") {
                return;
            }
            cnEl = makeCnElementOf(childEl, chineseParas[cnt]);
            cnt++;
        }
        else if (childEl.nodeName == "OL" || childEl.nodeName == "UL"){
            const liEls = childEl.querySelectorAll("li");
            liEls.forEach(liEl => {
                handleEl(liEl);
            });
        }

    });
}



handleEl(bodyEl);



const authorEl = document.querySelector(authorSelector).firstElementChild;

if (authorEl)
{
    const authorCnEl = makeCnElementOf(authorEl, "翻译：@SalviaSWC", applyStyle=false);
}



let s = `# ${chineseTitle}`;

let substances = chineseSubstances.slice(0, chineseSubstances.length - 1).join(", ");

if (chineseSubstances.length > 1)
{
    substances += "&";
}

substances += chineseSubstances[chineseSubstances.length - 1];

s += `——${substances}\n\n`;

s += "[◀返回](index.md)\n\n";

s += `原文网址：<${document.URL}>\n\n`

s += `--- \n\n`;

s += chineseParas.join("\n\n");

s += "\n\n---\n\n";

console.log(s);

/*

我是语文教师，需要利用这个文章在学生中引起反思。

首先，你应该找出文中具有鲜明特色的东西，你需要找出至少一个，可以多个(若适用)。这个东西可以是包括但不限于文章内容、写作手法、写作意图、表达效果、行文风格中的，然后最先输出，以确保你读懂了文章。（这个不要放在主输出里）

请使用本文，模仿语文高考，生成阅读理解的压轴题和参考答案，也是最难的一题，考察包括但不限于文章内容、写作手法、写作意图、表达效果、行文风格。注重药物在文中的作用。为了体现你的模型的实力，每一道题要求结合教材中的一篇课文(可以是诗词、文言文、现代文、必读篇目，但是自读课文除外)，形成对照阅读题，回归教材。题型，问法和考点要参考近几年真题和模拟卷。是简答题，不是选择题。生成10道题左右。不少于4000字。每一题的字数应该大致均等。

你要基于文中的一个最有潜在争议的东西，出一个高考作文题目，具有高度的思辨性，但题干不能过长，模仿历年高考作文。这个题目不要求结合教材。你的参考范文至少要有2个，且观点对立。参考答案必须展现出深度的思辨，并结合社会生活。给出作文评分标准。

特别注意：文中出现的给药表、体重等数据仅作参考，不要专门考察。

输出格式(请使用markdown中的html语法，粗体、斜体也请使用html标签)：

开头： 
<details markdown="1"> <summary> 奖励关：语文阅读理解练习+材料写作 </summary>

<h2>第几题：主要考点是什么</h2>

<h3>参考答案</h3>

......

<h3>评分要点</h3>

......

<h2>作文题目</h2>

<h3>给分标准</h3>

<h3>范文1</h3>

<h3>范文2</h3>

</details>

*/

