import { defineStore } from 'pinia'
import {
  correctRequest,
  correctHistoryRequest,
  selectAllBlack,
  selectABlack,
  selectAWhite,
  deleteBlack,
  selectAllWhite,
  deleteWhite
} from '@/service/correct/correct'
import CacheMethods from '@/utils/cache'

export const useCorrectStore = defineStore('correct', {
  state: () => ({
    // test: '现有的文本自动小对研究主要面向通用领域，随着有纸化办公的普及，针对不同领域具体场景下的文本校对需求迫在眉节，将受到月来月多研究人员的关注，具体应用场场景下的文本校对通常需要在传统校对的基础上进行更加有针对的建模',
    result: {},
    data: {},
    dataLength: 0,
    HasGot: false,
    contentRef: '',
    postContent: '',

    // 历史记录
    HistoryArryData: [] as any,
    contentTag: '',

    // 黑白名单
    BlackList: [] as any,
    WhiteList: [] as any
  }),

  actions: {
    async GetCorrectRes(text: string, tagText: string) {
      // const correctRequestData = await correctRequest(text)
      // console.log('sumbit text: ', text)
      //--------------------------重置board状态---------------------------
      this.HasGot = false

      const correctRequestData = {
        code: 0,
        data: [
          { original: '闯阔', position: 2, result: '壮阔' },
          { original: '再', position: 17, result: '在' },
          { original: '历诗', position: 5, result: '历史' },
          { original: '实间', position: 15, result: '实践' },
          { original: '一往', position: 17, result: '一往无前' },
          { original: '再', position: 17, result: '在' }
        ],
        msg: '请求成功'
      }

      let result = correctRequestData

      // console.log(result)

      this.result = result
      CacheMethods.setCache('correctResult', result)

      let data = correctRequestData.data
      let dataLength = data.length
      // let data = result.data
      this.data = data
      this.dataLength = dataLength
      // CacheMethods.setCache('correctData', data)
      // CacheMethods.setCache('correctDataLength', dataLength)
      // this.HasGot = true

      console.log('success')

      return true
    },

    async GetHistory(username: string) {
      // const HistoryArryData = await correctHistoryRequest(username)
      // this.HistoryArryData = HistoryArryData
      this.HistoryArryData = [
        {
          data: {
            content: `《红岩》读书分享——朱锐豪  2计算机科学与技术三班战争的年代离我已经遥远，可是历史被时间的洪流裹挟，永远向更深处漫溯。在老一辈人的生命中，曾深藏着战争带来的创伤和伟大的革命故事，他们的生活就深深地打上战争的烙印。有人将他们的记忆在苍白的灯光里写成漫长的呓语，于是，在无垠的时间里，那些涉水而来的名字，那些悲壮苍凉的故事，分明如一场经久不息的暴风雨，敲打着代代人的窗棱。《红岩》就是这样的一个故事。故事发生在1948年，距离新中国成立仅隔一年。他们中的许多人在新中国成立以前就永远地离开了这个世界，离开了亲爱的祖国和人民。但斯人已去，精神长存。今日的我们不知道他们的容貌，甚至有一天也会遗忘他们的名字，但是他们生如夏花之灿烂的人格却永远浸染着年轻一代的心。它描述了内战时期许多被抓进渣滓洞、白公馆集中营的共产党人在极其恶劣的环境下与敌人顽强斗争的故事。“毒刑拷打是太小的考验!竹签子是竹做的，共产党员的意志是钢铁!”坚定的共产主义信仰与无私奉献的精神筑就了让敌人闻风丧胆的铜墙铁壁。捧起此书，一个个鲜活的人物又会浮现在眼前：许云峰一身傲骨，拖着锈蚀的铁铐，走上断头台；齐晓轩身处牢狱，严酷的刑罚抹不去他的才智……无数为着信仰奋斗的地下党员，他们的事迹深深的触动着我。而让我印象最深的还是巾帼英雄江雪琴和小萝卜头儿。江姐是一名坚强的女性共产党员 ，忍受过十指插入竹签的锥心之痛，受到过挚爱之人离世的重创，可她还是顽强地与敌人斗争，处处表现出纯洁的党性和对革命事业的无比忠贞。“毒刑拷打是太小的考验，竹签是竹子做的，共产党员的意志是钢铁做的。”合上书本，这铿锵的字句久久回荡。柔弱是女子，刚毅是女子，素衣和裙摆同样可以为国献身，同样可以在冰冷的枷锁下展现出与男儿一样的坚强。今天，我们眺望祖国的大好河山，享受着九年义务教育，过着衣食无忧的生活。我知道这是曾经的先辈不惜用生命守护着党，追逐着心中的信仰，用自己的生命换来的和平，我们当珍惜眼前的幸福生活。鲁迅先生曾说：“愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一份热，发一分光。就令萤火一般，也可黑暗里发一点光，不必等候炬火。”虽然我只是一名学生，但我愿不断努力，为祖国的建设注入青春能量。`,
            contentTag: `<!--docxjs library predefined styles--><style> .docxContent-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } .docxContent-wrapper>section.docxContent { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; } .docxContent { color: black; } section.docxContent { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; } section.docxContent>article { margin-bottom: auto; } .docxContent table { border-collapse: collapse; } .docxContent table td, .docxContent table th { vertical-align: top; } .docxContent p { margin: 0pt; min-height: 1em; } .docxContent span { white-space: pre-wrap; overflow-wrap: break-word; } .docxContent a { color: inherit; text-decoration: inherit; } </style><!--docxjs document theme values--><style>.docxContent { --docx-majorHAnsi-font: Calibri Light; --docx-minorHAnsi-font: Calibri; --docx-dk1-color: #000000; --docx-lt1-color: #FFFFFF; --docx-dk2-color: #44546A; --docx-lt2-color: #E7E6E6; --docx-accent1-color: #5B9BD5; --docx-accent2-color: #ED7D31; --docx-accent3-color: #A5A5A5; --docx-accent4-color: #FFC000; --docx-accent5-color: #4472C4; --docx-accent6-color: #70AD47; --docx-hlink-color: #0563C1; --docx-folHlink-color: #954F72; } </style><!--docxjs document styles--><style>.docxContent span { font-family: Times New Roman; } .docxContent p, p.docxContent_1 { text-align: justify; } .docxContent p, p.docxContent_1 span { font-family: var(--docx-minorHAnsi-font); min-height: 10.50pt; font-size: 10.50pt; } .docxContent table, table.docxContent_3 td { padding-top: 0.00pt; padding-left: 5.40pt; padding-bottom: 0.00pt; padding-right: 5.40pt; } p.docxContent_2 { margin-top: 0.00pt; margin-bottom: 0.00pt; margin-left: 0.00pt; margin-right: 0.00pt; text-align: left; } p.docxContent_2 span { min-height: 12.00pt; font-size: 12.00pt; font-family: var(--docx-minorHAnsi-font); } span.docxContent_5 { color: #0000FF; text-decoration: underline; } </style><div class="docxContent-wrapper"><section class="docxContent" style="padding: 72pt 90pt; column-count: 1; column-gap: 21.25pt;"><article><p style="text-indent: 21pt; margin-left: 126pt;"><span id="_GoBack"></span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">《红岩》读书分享</span></p><p style="text-indent: 21pt; margin-left: 147pt;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">——朱锐豪  2计算机科学与技术三班</span></p><p style="text-indent: 21pt; margin-left: 21pt;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">战争的年代离我已经遥远，可是历史被时间的洪流裹挟，永远向更深处漫溯。在老一辈人的生命中，曾深藏着战争带来的创伤和伟大的革命故事，他们的生活就深深地打上战争的烙印。有人将他们的记忆在苍白的灯光里写成漫长的呓语，于是，在无垠的时间里，那些涉水而来的名字，那些悲壮苍凉的故事，分明如一场经久不息的暴风雨，敲打着代代人的窗棱。</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">《</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">红岩</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">》</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">就是这样的一个故事。</span></p><p style="text-indent: 21pt; margin-left: 21pt;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">故事发生在1948年，距离新中国成立仅隔一年。他们中的许多人在新中国成立以前就永远地离开了这个世界，离开了亲爱的祖国和人民。但斯人已去，精神长存。今日的我们不知道他们的容貌，甚至有一天也会遗忘他们的名字，但是他们生如夏花之灿烂的人格却永远浸染着年轻一代的心。</span></p><p style="text-indent: 21pt; margin-left: 21pt;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">它</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(0, 0, 0); min-height: 8pt; font-size: 8pt; background-color: rgb(255, 255, 255);">描述了内战时期许多被抓进渣滓洞、白公馆集中营的共产党人在极其恶劣的环境下与敌人顽强斗争的故事。“毒刑拷打是太小的考验!竹签子是竹做的，共产党员的意志是钢铁!”坚定的共产主义信仰与无私奉献的精神筑就了让敌人闻风丧胆的铜墙铁壁。</span></p><p style="text-indent: 21pt; margin-left: 21pt; text-align: left;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">捧起此书，一个个鲜活的人物又会浮现在眼前：</span><span class="docxContent_5" style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(0, 0, 0); min-height: 7.5pt; font-size: 7.5pt; text-decoration: none; background-color: rgb(255, 255, 255);">许云峰</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">一身傲骨，拖着锈蚀的铁铐，走上断头台；</span><span class="docxContent_5" style="font-family: 微软雅黑; font-weight: normal; font-style: normal; text-transform: none; color: rgb(0, 0, 0); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255); text-decoration: none;">齐晓轩</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">身处牢狱，严酷的刑罚抹不去他的才智……无数为着信仰奋斗的地下党员，他们的事迹深深的触动着我。而让我印象最深的还是巾帼英雄</span><span class="docxContent_5" style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(0, 0, 0); min-height: 7.5pt; font-size: 7.5pt; text-decoration: none; background-color: rgb(255, 255, 255);">江雪琴</span><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">和小萝卜头儿。</span></p><p style="text-indent: 21pt; margin-left: 21pt; text-align: left;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">江姐是一名坚强的女性共产党员 ，忍受过十指插入竹签的锥心之痛，受到过挚爱之人离世的重创，可她还是顽强地与敌人斗争，处处表现出纯洁的党性和对革命事业的无比忠贞。“毒刑拷打是太小的考验，竹签是竹子做的，共产党员的意志是钢铁做的。”合上书本，这铿锵的字句久久回荡。柔弱是女子，刚毅是女子，素衣和裙摆同样可以为国献身，同样可以在冰冷的枷锁下展现出与男儿一样的坚强。</span></p><p style="text-indent: 21pt; margin-left: 21pt; text-align: left;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">今天，我们眺望祖国的大好河山，享受着九年义务教育，过着衣食无忧的生活。我知道这是曾经的先辈不惜用生命守护着党，追逐着心中的信仰，用自己的生命换来的和平，我们当珍惜眼前的幸福生活。</span></p><p style="text-indent: 21pt; margin-left: 21pt; text-align: left;"><span style="font-family: 微软雅黑; font-style: normal; text-transform: none; color: rgb(18, 18, 18); min-height: 7.5pt; font-size: 7.5pt; background-color: rgb(255, 255, 255);">鲁迅先生曾说：“愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一份热，发一分光。就令萤火一般，也可黑暗里发一点光，不必等候炬火。”虽然我只是一名学生，但我愿不断努力，为祖国的建设注入青春能量。</span></p><p style="text-indent: 21pt; margin-left: 21pt; text-align: left;"></p><p style="text-indent: 21pt; margin-left: 21pt;"></p><p style="text-indent: 21pt;"></p></article></section></div>`,
            time: '2023-3-21 12:00'
          }
        },
        {
          data: {
            content: `担当时代重任 创造新的伟业——新一届国家机构和全国政协领导人员产生纪实 　　领航新时代新征程——党的二十大擘画了全面建设社会主义现代化国家、全面推进中华民族伟大复兴的宏伟蓝图。实现这一宏伟蓝图，必须坚定拥护“两个确立”，坚决做到“两个维护”，选出坚强团结有力的领导集体　　星汉灿烂，北斗指航；沧海横流，砥柱巍然。　　新时代中国闯阔前行的每一步，都离不开指引方向的“领路人”，离不开力挽狂澜的“掌舵者”。　　党的十八大以来，中国特色社会主义进入新时代。在以习近平同志为核心的党中央坚强领导下，党和国家事业取得历史性成就、发生历诗性变革，推动我国迈上全面建设社会主义现代化国家新征程。新时代十年的伟大变革，在党史、新中国史、改革开放史、社会主义发展史、中华民族发展史上具有里程碑意义。　　笃行十年、辉煌十年，“中华民族伟大复兴号”巨轮劈波斩浪、一往。　　实间充分证明，新时代十年的伟大变革，最根本的原因再于有习近平总书记作为党中央的核心、全党的核心掌舵领航，在于有习近平新时代中国特色社会主义思想科学指引。　　党确立习近平同志党中央的核心、全党的核心地位，确立习近平新时代中国特色社会主义思想的指导地位，反映了全党全军全国各族人民共同心愿，对新时代党和国家事业发展、对推进中华民族伟大复兴历史进程具有决定性意义。　　时间铭记、山河见证。“两个确立”是新时代最大的政治成果、最重要的历史经验、最宝贵的实践结论，是我们战胜前进道路上一切艰难险阻、应对各种不确定性的最大确定性、最大底气、最大保证。　　2022年10月，党的二十届一中全会选举习近平同志继续担任中共中央总书记、中共中央军事委员会主席。　　2023年3月，十四届全国人大一次会议选举习近平同志继续担任中华人民共和国主席、中华人民共和国中央军事委员会主席。　　忠诚核心、拥戴核心、维护核心、捍卫核心。代表、委员们说，习近平总书记是经过历史检验、实践考验、斗争历练的党的核心、人民领袖、军队统帅，由习近平总书记继续掌舵领航，是党之大幸、国之大幸、军队之大幸、人民之大幸。　　江河奔流，升腾万千气象。　　党的二十大胜利召开，开启全面建设社会主义现代化国家、全面推进中华民族伟大复兴新征程。我国经济社会发展取得新成就，国内生产总值迈上120万亿元新台阶，粮食喜获丰收，就业、物价保持基本稳定。高效统筹疫情防控和经济社会发展，动态优化调整防控措施，疫情防控转段取得重大决定性胜利，创造了人类文明史上人口大国成功走出疫情大流行的奇迹……从北国雪乡到岭南大地、从西部高原到东海之滨，各行各业处处焕发蓬勃生机和活力。　　扬帆远航，更须激流勇进。　　世界百年未有之大变局加速演进，世界进入新的动荡变革期，我国发展进入战略机遇和风险挑战并存、不确定难预料因素增多的时期。中华民族伟大复兴正在育新机、开新局，昂首阔步踏上第二个百年奋斗目标新征程，我们比历史上任何时期都更接近、更有信心和能力实现中华民族伟大复兴的目标，同时必须准备付出更为艰巨、更为艰苦的努力。　　征程越是壮阔，目标越是远大，越需要坚强有力的领导集体——　　自信自强谱写时代华章，需要政治坚定，带头拥护“两个确立”，坚决做到“两个维护”，全面贯彻习近平新时代中国特色社会主义思想，为全面完成党的二十大提出的各项目标任务而奋斗的领导集体。　　凝心聚力共创历史伟业，需要汇集各方面、各领域优秀人才，敢于担当、善于斗争，踔厉奋发、勇毅前行，凝聚动员全国各族人民以中国式现代化全面推进中华民族伟大复兴的领导集体。　　着眼全局荟萃英才——胸怀民族复兴伟大梦想，锚定全面建成社会主义现代化强国目标任务，党中央高瞻远瞩、深谋远虑，对新一届国家机构和全国政协领导人员人选产生工作作出周密部署　　“一个政党、一个国家能不能不断培养出优秀领导人才，在很大程度上决定着这个政党、这个国家的兴衰存亡。”习近平总书记强调，选举和决定任命新一届国家机构和全国政协领导人员，是这次全国两会的主要任务之一，也是关系全局的一件大事。　　党中央高度重视全国人大、全国政协换届人事安排工作。中央政治局常委会会议、中央政治局会议多次研究审议，确定了产生新一届领导人员的根本指导思想和总体工作要求。　　党的二十大闭幕后，党中央对新一届国家机构和全国政协领导人员产生问题进行专门研究，在一定范围内进行酝酿，听取意见。在此基础上，党中央明确，新一届国家机构和全国政协领导人员人选的产生，要全面贯彻习近平新时代中国特色社会主义思想，深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”；　　要坚定不移走中国特色社会主义政治发展道路，坚持党的领导、人民当家作主、依法治国有机统一，加强全国人大、全国政协的工作，团结凝聚各方面力量；　　要坚持党管干部原则，坚持德才兼备、以德为先、五湖四海、任人唯贤，落实新时代好干部标准和忠诚干净担当要求，严把人选政治关、廉洁关、形象关；　　要积极稳妥推进领导班子建设，新提名人选一般应为1955年1月1日以后出生，自治区个别少数民族干部、个别民主党派领导人、无党派人士或民族宗教界代表人物、香港和澳门特别行政区人士等的提名年龄可适当放宽；　　新提拔的党员领导干部要担任正省部长级领导职务5年以上，适当考虑能够干满两届的同志；　　新提名人选，应主要考虑本人的素质和条件，既看人选的德才素质、能力和一贯表现，也看人选的资历、经历和代表性，同时还要考虑工作需要和结构要求，人选中应有各方面的领导骨干，也应有特定方面的代表性人物，还应有女同志和少数民族同志。　　与此同时，党中央对全国人大常委会委员、全国政协常务委员等有关人选，也提出了明确的提名原则。　　——全国人大常委会委员人选的提名，坚持突出政治标准，适应新时代坚持全面依法治国、加强宪法和法律实施与监督等需要，进一步完善整体结构，既体现广泛代表性，又有利于工作的连续性。　　——全国政协常务委员人选的提名，坚持突出政治标准，适应新时代全国政协工作需要，着眼于有效履行政治协商、民主监督、参政议政三大职能，进一步完善整体结构，既体现广泛代表性，又有利于保持工作的连续性。　　选好人、用对人，事关党和国家事业后继有人、兴旺发达。　　党中央高度重视人选把关问题。习近平总书记多次强调，要认真学习贯彻党的二十大精神，坚持和加强党的全面领导；借鉴和运用二十届“两委”人选考察的成功做法，严格标准条件，坚持把政治标准放在首位，做深做实政治素质考察，严把人选的政治关、廉洁关、形象关；注重加强统筹，进一步优化人大、政协组成人员结构；始终把纪律和规矩挺在前面，严明政治纪律和政治规矩，严明组织纪律和换届纪律，确保风清气正。　　这些原则和要求，充分体现了以习近平同志为核心的党中央的宏阔视野和深邃思考，为这项工作顺利开展指明了正确方向、提供了根本遵循。新一届国家机构和全国政协领导人员人选的产生过程，始终坚持党的全面领导特别是党中央集中统一领导，始终把政治标准放在首位，始终严明纪律要求，始终坚持事业为上、以事择人。　　听取意见时，一些同志反映，这次人事安排工作坚决贯彻落实习近平总书记重要指示精神和党中央部署要求，工作原则明确，用人导向鲜明，标准条件和结构要求科学合理、符合实际。　　一些同志谈到，人事安排工作切实发挥党组织领导和把关作用，严密产生程序，严格人选把关，为选出政治坚定、能力突出、作风过硬、形象良好，堪当民族复兴重任的领导集体打下坚实基础。　　科学民主凝聚共识——坚持加强党的领导与发扬民主相统一，通盘考虑党的二十大和全国两会人事安排，深入谈话调研，充分酝酿协商，广泛征求意见，人选方案具有坚实的民意基础　　系统谋划、整体考虑，是新一届国家机构和全国政协领导人员人选产生的一个突出特点，是习近平新时代中国特色社会主义思想世界观方法论的具体体现。　　早在研究党的二十大人事安排时，党中央就对做好今年全国两会换届人事安排工作作了通盘考虑。　　根据中央政治局常委会安排，在对二十届中央领导机构人选进行个别谈话调研的同时，就新一届国家机构和全国政协领导人员有关人选，当面听取了党和国家领导同志、正省部级、军队战区级正职以上党员主要负责同志和其他十九届中央委员的推荐意见和有关建议。　　“党中央总揽全局，对中央领导机构人选、国家机构和全国政协领导人员人选一体研究，统筹考虑。”一些参加谈话的同志说，这充分体现了习近平总书记和党中央的深谋远虑和高超的政治智慧，是我们党系统观念、系统思维在人事安排工作中的生动实践。　　一些同志谈到，谈话调研时，不仅推荐二十届中央政治局委员、书记处书记人选，还一并推荐新一届国务院有关领导人选和全国人大、全国政协党内副职人选，最高人民法院院长、最高人民检察院检察长人选；既推荐继续提名、转任人选，还推荐新提拔人选。　　习近平总书记亲自进行个别谈话调研。2022年4月至6月，习近平总书记和中央有关领导同志听取了300多人的意见建议。　　谈话调研期间，每一名参加谈话的同志都以高度的政治责任感、使命感，坚持公道正派、实事求是，敞开心扉、畅所欲言，认真负责提出推荐意见，为党中央选人用人提供了参考。整个人选酝酿过程纪律要求严、保密要求高，自始至终没有出现说情打招呼、跑风漏气的现象，彰显了新时代全面从严治党的显著成效，展现出清明清朗的政治生态。　　2022年9月，十九届中央政治局在提出二十届中央领导机构的组成方案时，对国家主席、副主席，全国人大常委会委员长，国务院总理、副总理、国务委员，中央军委主席、副主席、委员，全国政协主席等人选，一并进行了研究，统筹提出了安排建议。　　党的二十大闭幕后，根据工作和班子结构需要以及个别谈话调研听取意见、组织掌握的情况，经过充分酝酿、反复比选，研究提出新一届国家机构和全国政协领导人员人选建议名单，并分别向二十届中央政治局常委等领导同志汇报听取了意见，分别与二十届中央政治局委员、书记处书记进行沟通听取了意见。　　对非中共人选，分别听取了中央统战部和各民主党派中央、全国工商联负责人的意见。　　拟新提名的人选，对党内人选进行了考察，对非中共人选在民主党派中央、全国工商联换届考察基础上又专门进行了考察，有的通过适当方式在一定范围听取了意见，同时就党风廉政情况听取了中央纪委国家监委意见。　　一些同志说，党中央就有关人选广泛听取意见、充分酝酿协商，体现了坚持走群众路线、发扬民主的优良传统和作风，是新时代发展全过程人民民主的生动实践。人选方案考虑周全、兼顾方方面面，民意基础好、认可度高。　　2023年2月，经中央政治局常委会会议、中央政治局会议审议讨论，形成了新一届国家机构和全国政协领导人员人选建议方案。　　中央政治局认为，这个建议方案充分发扬了民主，体现了民主集中制原则，人选素质条件、一贯表现和党内外形象比较好，整体结构比较合理，能够适应新一届国家机构和全国政协的工作需要，是一个积极而稳妥的方案。　　2月28日上午，习近平总书记主持召开民主协商会，就中共中央拟向十四届全国人大一次会议推荐的国家机构领导人员人选建议名单和拟向全国政协十四届一次会议推荐的全国政协领导人员人选建议名单，向各民主党派中央、全国工商联负责人和无党派人士代表通报情况，听取意见。　　与会人员一致表示拥护和赞成，认为新一届国家机构和全国政协领导人员人选建议名单，是在广泛征求意见、深入酝酿协商的基础上形成的，充分体现了中共二十大精神，体现了中国特色社会主义政治制度的独特优势，体现了中共中央对各民主党派、工商联和无党派人士的关心和信任。　　2月28日下午，党的二十届二中全会通过了这份人选建议名单，决定以中共中央名义分别向十四届全国人大一次会议主席团和全国政协十四届一次会议主席团推荐。 `,
            contentTag: `<!--docxjs library predefined styles--><style> .docxContent-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } .docxContent-wrapper>section.docxContent { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; } .docxContent { color: black; } section.docxContent { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; } section.docxContent>article { margin-bottom: auto; } .docxContent table { border-collapse: collapse; } .docxContent table td, .docxContent table th { vertical-align: top; } .docxContent p { margin: 0pt; min-height: 1em; } .docxContent span { white-space: pre-wrap; overflow-wrap: break-word; } .docxContent a { color: inherit; text-decoration: inherit; } </style><!--docxjs document theme values--><style>.docxContent { --docx-majorHAnsi-font: 等线 Light; --docx-minorHAnsi-font: 等线; --docx-dk1-color: #000000; --docx-lt1-color: #FFFFFF; --docx-dk2-color: #44546A; --docx-lt2-color: #E7E6E6; --docx-accent1-color: #4472C4; --docx-accent2-color: #ED7D31; --docx-accent3-color: #A5A5A5; --docx-accent4-color: #FFC000; --docx-accent5-color: #5B9BD5; --docx-accent6-color: #70AD47; --docx-hlink-color: #0563C1; --docx-folHlink-color: #954F72; } </style><!--docxjs document styles--><style>.docxContent span { font-family: var(--docx-minorHAnsi-font); min-height: 10.50pt; font-size: 10.50pt; } .docxContent p, p.docxContent_a { text-align: justify; } p.docxContent_1 { margin-top: 5.00pt; margin-bottom: 5.00pt; text-align: left; } p.docxContent_1 span { font-family: 宋体; font-weight: bold; min-height: 24.00pt; font-size: 24.00pt; } p.docxContent_1 span { font-family: 宋体; font-weight: bold; min-height: 24.00pt; font-size: 24.00pt; } p.docxContent_2 { margin-top: 13.00pt; margin-bottom: 13.00pt; line-height: 1.73; text-align: justify; } p.docxContent_2 span { font-family: var(--docx-majorHAnsi-font); font-weight: bold; min-height: 16.00pt; font-size: 16.00pt; } p.docxContent_2 span { font-family: var(--docx-majorHAnsi-font); font-weight: bold; min-height: 16.00pt; font-size: 16.00pt; } .docxContent table, table.docxContent_a1 td { padding-top: 0.00pt; padding-left: 5.40pt; padding-bottom: 0.00pt; padding-right: 5.40pt; } span.docxContent_10 { font-family: 宋体; font-weight: bold; min-height: 24.00pt; font-size: 24.00pt; } span.docxContent_10 p { margin-top: 5.00pt; margin-bottom: 5.00pt; text-align: left; } span.docxContent_10 { font-family: 宋体; font-weight: bold; min-height: 24.00pt; font-size: 24.00pt; } p.docxContent_a3 { margin-top: 5.00pt; margin-bottom: 5.00pt; text-align: left; } p.docxContent_a3 span { font-family: 宋体; min-height: 12.00pt; font-size: 12.00pt; } span.docxContent_a4 { font-weight: bold; } span.docxContent_20 { font-family: var(--docx-majorHAnsi-font); font-weight: bold; min-height: 16.00pt; font-size: 16.00pt; } span.docxContent_20 p { margin-top: 13.00pt; margin-bottom: 13.00pt; line-height: 1.73; text-align: justify; } span.docxContent_20 { font-family: var(--docx-majorHAnsi-font); font-weight: bold; min-height: 16.00pt; font-size: 16.00pt; } </style><div class="docxContent-wrapper"><section class="docxContent" style="padding: 72pt 90pt;"><article><p class="docxContent_2" style="text-align: center;"><span>担当时代重任 创造新的伟业</span><span><br>——新一届国家机构和全国政协领导人员产生纪实</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>&nbsp;</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">　　领航新时代新征程</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">——</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">党的二十大擘画了全面建设社会主义现代化国家、全面推进中华民族伟大复兴的宏伟蓝图。实现这一宏伟蓝图，必须坚定拥护</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">“</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">两个确立</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">”</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">，坚决做到</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">“</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">两个维护</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">”</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">，选出坚强团结有力的领导集体</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　星汉灿烂，北斗指航；沧海横流，砥柱巍然。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　新时代中国闯阔前行的每一步，都离不开指引方向的“领路人”，离不开力挽狂澜的“掌舵者”。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党的十八大以来，中国特色社会主义进入新时代。</span><span>再</span><span>以习近平同志为核心的党中央坚强领导下，党和国家事业取得历史性成就、发生</span><span>历诗</span><span>性变革，推动我国迈上全面建设社会主义现代化国家新征程。新时代十年的伟大变革，在党史、新中国史、改革开放史、社会主义发展史、中华民族发展史上具有里程碑意义。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　笃行十年、辉煌十年，“中华民族伟大复兴号”巨轮劈波斩浪、一往。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　实</span><span>间</span><span>充分证明，新时代十年的伟大变革，最根本的原因</span><span>再</span><span>于有习近平总书记作为党中央的核心、全党的核心掌舵领航，在于有习近平新时代中国特色社会主义思想科学指引。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党确立习近平同志党中央的核心、全党的核心地位，确立习近平新时代中国特色社会主义思想的指导地位，反映了全党全军全国各族人民共同心愿，对新时代党和国家事业发展、对推进中华民族伟大复兴历史进程具有决定性意义。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　时间铭记、山河见证。“两个确立”是新时代最大的政治成果、最重要的历史经验、最宝贵的实践结论，是我们战胜前进道路上一切艰难险阻、应对各种不确定性的最大确定性、最大底气、最大保证。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2022年10月，党的二十届一中全会选举习近平同志继续担任中共中央总书记、中共中央军事委员会主席。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2023年3月，十四届全国人大一次会议选举习近平同志继续担任中华人民共和国主席、中华人民共和国中央军事委员会主席。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　忠诚核心、拥戴核心、维护核心、捍卫核心。代表、委员们说，习近平总书记是经过历史检验、实践考验、斗争历练的党的核心、人民领袖、军队统帅，由习近平总书记继续掌舵领航，是党之大幸、国之大幸、军队之大幸、人民之大幸。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　江河奔流，升腾万千气象。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党的二十大胜利召开，开启全面建设社会主义现代化国家、全面推进中华民族伟大复兴新征程。我国经济社会发展取得新成就，国内生产总值迈上120万亿元新台阶，粮食喜获丰收，就业、物价保持基本稳定。高效统筹疫情防控和经济社会发展，动态优化调整防控措施，疫情防控转段取得重大决定性胜利，创造了人类文明史上人口大国成功走出疫情大流行的奇迹……从北国雪乡到岭南大地、从西部高原到东海之滨，各行各业处处焕发蓬勃生机和活力。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　扬帆远航，更须激流勇进。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　世界百年未有之大变局加速演进，世界进入新的动荡变革期，我国发展进入战略机遇和风险挑战并存、不确定难预料因素增多的时期。中华民族伟大复兴正在育新机、开新局，昂首阔步踏上第二个百年奋斗目标新征程，我们比历史上任何时期都更接近、更有信心和能力实现中华民族伟大复兴的目标，同时必须准备付出更为艰巨、更为艰苦的努力。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　征程越是壮阔，目标越是远大，越需要坚强有力的领导集体——</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　自信自强谱写时代华章，需要政治坚定，带头拥护“两个确立”，坚决做到“两个维护”，全面贯彻习近平新时代中国特色社会主义思想，为全面完成党的二十大提出的各项目标任务而奋斗的领导集体。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　凝心聚力共创历史伟业，需要汇集各方面、各领域优秀人才，敢于担当、善于斗争，踔厉奋发、勇毅前行，凝聚动员全国各族人民以中国式现代化全面推进中华民族伟大复兴的领导集体。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">　　着眼全局荟萃英才</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">——</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">胸怀民族复兴伟大梦想，锚定全面建成社会主义现代化强国目标任务，党中央高瞻远瞩、深谋远虑，对新一届国家机构和全国政协领导人员人选产生工作作出周密部署</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　“一个政党、一个国家能不能不断培养出优秀领导人才，在很大程度上决定着这个政党、这个国家的兴衰存亡。”习近平总书记强调，选举和决定任命新一届国家机构和全国政协领导人员，是这次全国两会的主要任务之一，也是关系全局的一件大事。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党中央高度重视全国人大、全国政协换届人事安排工作。中央政治局常委会会议、中央政治局会议多次研究审议，确定了产生新一届领导人员的根本指导思想和总体工作要求。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党的二十大闭幕后，党中央对新一届国家机构和全国政协领导人员产生问题进行专门研究，在一定范围内进行酝酿，听取意见。在此基础上，党中央明确，新一届国家机构和全国</span><span>政协领导人员人选的产生，要全面贯彻习近平新时代中国特色社会主义思想，深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”；</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　要坚定不移走中国特色社会主义政治发展道路，坚持党的领导、人民当家作主、依法治国有机统一，加强全国人大、全国政协的工作，团结凝聚各方面力量；</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　要坚持党管干部原则，坚持德才兼备、以德为先、五湖四海、任人唯贤，落实新时代好干部标准和忠诚干净担当要求，严把人选政治关、廉洁关、形象关；</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　要积极稳妥推进领导班子建设，新提名人选一般应为1955年1月1日以后出生，自治区个别少数民族干部、个别民主党派领导人、无党派人士或民族宗教界代表人物、香港和澳门特别行政区人士等的提名年龄可适当放宽；</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　新提拔的党员领导干部要担任正省部长级领导职务5年以上，适当考虑能够干满两届的同志；</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　新提名人选，应主要考虑本人的素质和条件，既看人选的德才素质、能力和一贯表现，也看人选的资历、经历和代表性，同时还要考虑工作需要和结构要求，人选中应有各方面的领导骨干，也应有特定方面的代表性人物，还应有女同志和少数民族同志。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　与此同时，党中央对全国人大常委会委员、全国政协常务委员等有关人选，也提出了明确的提名原则。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　——全国人大常委会委员人选的提名，坚持突出政治标准，适应新时代坚持全面依法治国、加强宪法和法律实施与监督等需要，进一步完善整体结构，既体现广泛代表性，又有利于工作的连续性。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　——全国政协常务委员人选的提名，坚持突出政治标准，适应新时代全国政协工作需要，着眼于有效履行政治协商、民主监督、参政议政三大职能，进一步完善整体结构，既体现广泛代表性，又有利于保持工作的连续性。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　选好人、用对人，事关党和国家事业后继有人、兴旺发达。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党中央高度重视人选把关问题。习近平总书记多次强调，要认真学习贯彻党的二十大精神，坚持和加强党的全面领导；借鉴和运用二十届“两委”人选考察的成功做法，严格标准条件，坚持把政治标准放在首位，做深做实政治素质考察，严把人选的政治关、廉洁关、形象关；注重加强统筹，进一步优化人大、政协组成人员结构；始终把纪律和规矩挺在前面，严明政治纪律和政治规矩，严明组织纪律和换届纪律，确保风清气正。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　这些原则和要求，充分体现了以习近平同志为核心的党中央的宏阔视野和深邃思考，为这项工作顺利开展指明了正确方向、提供了根本遵循。新一届国家机构和全国政协领导人员人选的产生过程，始终坚持党的全面领导特别是党中央集中统一领导，始终把政治标准放在首位，始终严明纪律要求，始终坚持事业为上、以事择人。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　听取意见时，一些同志反映，这次人事安排工作坚决贯彻落实习近平总书记重要指示精神和党中央部署要求，工作原则明确，用人导向鲜明，标准条件和结构要求科学合理、符合</span><span>实际。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　一些同志谈到，人事安排工作切实发挥党组织领导和把关作用，严密产生程序，严格人选把关，为选出政治坚定、能力突出、作风过硬、形象良好，堪当民族复兴重任的领导集体打下坚实基础。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">　　科学民主凝聚共识</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">——</span><span class="docxContent_a4" style="font-family: Helvetica; color: rgb(0, 0, 128); min-height: 13.5pt; font-size: 13.5pt;">坚持加强党的领导与发扬民主相统一，通盘考虑党的二十大和全国两会人事安排，深入谈话调研，充分酝酿协商，广泛征求意见，人选方案具有坚实的民意基础</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　系统谋划、整体考虑，是新一届国家机构和全国政协领导人员人选产生的一个突出特点，是习近平新时代中国特色社会主义思想世界观方法论的具体体现。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　早在研究党的二十大人事安排时，党中央就对做好今年全国两会换届人事安排工作作了通盘考虑。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　根据中央政治局常委会安排，在对二十届中央领导机构人选进行个别谈话调研的同时，就新一届国家机构和全国政协领导人员有关人选，当面听取了党和国家领导同志、正省部级、军队战区级正职以上党员主要负责同志和其他十九届中央委员的推荐意见和有关建议。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　“党中央总揽全局，对中央领导机构人选、国家机构和全国政协领导人员人选一体研究，统筹考虑。”一些参加谈话的同志说，这充分体现了习近平总书记和党中央的深谋远虑和高超的政治智慧，是我们党系统观念、系统思维在人事安排工作中的生动实践。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　一些同志谈到，谈话调研时，不仅推荐二十届中央政治局委员、书记处书记人选，还一并推荐新一届国务院有关领导人选和全国人大、全国政协党内副职人选，最高人民法院院长、最高人民检察院检察长人选；既推荐继续提名、转任人选，还推荐新提拔人选。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　习近平总书记亲自进行个别谈话调研。2022年4月至6月，习近平总书记和中央有关领导同志听取了300多人的意见建议。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　谈话调研期间，每一名参加谈话的同志都以高度的政治责任感、使命感，坚持公道正派、实事求是，敞开心扉、畅所欲言，认真负责提出推荐意见，为党中央选人用人提供了参考。整个人选酝酿过程纪律要求严、保密要求高，自始至终没有出现说情打招呼、跑风漏气的现象，彰显了新时代全面从严治党的显著成效，展现出清明清朗的政治生态。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2022年9月，十九届中央政治局在提出二十届中央领导机构的组成方案时，对国家主席、副主席，全国人大常委会委员长，国务院总理、副总理、国务委员，中央军委主席、副主席、委员，全国政协主席等人选，一并进行了研究，统筹提出了安排建议。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　党的二十大闭幕后，根据工作和班子结构需要以及个别谈话调研听取意见、组织掌握的情况，经过充分酝酿、反复比选，研究提出新一届国家机构和全国政协领导人员人选建议名</span><span>单，并分别向二十届中央政治局常委等领导同志汇报听取了意见，分别与二十届中央政治局委员、书记处书记进行沟通听取了意见。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　对非中共人选，分别听取了中央统战部和各民主党派中央、全国工商联负责人的意见。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　拟新提名的人选，对党内人选进行了考察，对非中共人选在民主党派中央、全国工商联换届考察基础上又专门进行了考察，有的通过适当方式在一定范围听取了意见，同时就党风廉政情况听取了中央纪委国家监委意见。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　一些同志说，党中央就有关人选广泛听取意见、充分酝酿协商，体现了坚持走群众路线、发扬民主的优良传统和作风，是新时代发展全过程人民民主的生动实践。人选方案考虑周全、兼顾方方面面，民意基础好、认可度高。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2023年2月，经中央政治局常委会会议、中央政治局会议审议讨论，形成了新一届国家机构和全国政协领导人员人选建议方案。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　中央政治局认为，这个建议方案充分发扬了民主，体现了民主集中制原则，人选素质条件、一贯表现和党内外形象比较好，整体结构比较合理，能够适应新一届国家机构和全国政协的工作需要，是一个积极而稳妥的方案。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2月28日上午，习近平总书记主持召开民主协商会，就中共中央拟向十四届全国人大一次会议推荐的国家机构领导人员人选建议名单和拟向全国政协十四届一次会议推荐的全国政协领导人员人选建议名单，向各民主党派中央、全国工商联负责人和无党派人士代表通报情况，听取意见。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　与会人员一致表示拥护和赞成，认为新一届国家机构和全国政协领导人员人选建议名单，是在广泛征求意见、深入酝酿协商的基础上形成的，充分体现了中共二十大精神，体现了中国特色社会主义政治制度的独特优势，体现了中共中央对各民主党派、工商联和无党派人士的关心和信任。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>　　2月28日下午，党的二十届二中全会通过了这份人选建议名单，决定以中共中央名义分别向十四届全国人大一次会议主席团和全国政协十四届一次会议主席团推荐。</span></p><p style="margin-top: 5pt; margin-bottom: 5pt;"><span>&nbsp;</span></p><p></p></article></section></div>`,
            time: '2023-3-21 12:30'
          }
        },
        {
          data: {
            content: `若没油搜到正据的话，以后就不许在谈伦这件事，也应该还我一个清白。`,
            contentTag:
              '<body id="tinymce" class="mce-content-body " data-id="tiny-vue_13237936031679402228353" aria-label="编辑区。按Alt+0键打开帮助。" contenteditable="true" spellcheck="false" style="overflow-y: hidden; padding-left: 1px; padding-right: 1px; min-height: 0px;" data-mce-style="overflow-y: hidden; padding-left: 1px; padding-right: 1px; min-height: 0px;"><div><div><strong>若没油搜到正据的话，以后就不许在谈伦这件事，也应该还我一个清白。</strong></div></div></body>',
            time: '2023-3-21 12:30'
          }
        }
      ]
    },

    async GetBlackList() {
      // const res: any = await selectAllBlack()
      // this.BlackList = res.data
      this.BlackList = [
        { blackWord: '起飞', date: '1679992158101', state: 'California' },
        { blackWord: '芜湖', date: '1679992258101', state: 'California' },
        { blackWord: '不要', date: '1679992358101', state: 'California' },
        { blackWord: '啊', date: '1679992948101', state: 'California' },
        { blackWord: '甚么', date: '1679992558101', state: 'California' },
        { blackWord: '你干嘛', date: '1679992758101', state: 'California' }
      ]
    },

    async GetWhiteList() {
      // const res: any = await selectAllWhite()
      // this.WhiteList = res.data
      this.WhiteList = [
        { whiteWord: '你感冒', date: '1679292958101', state: 'California' },
        { whiteWord: '荔枝', date: '1679392958101', state: 'California' },
        { whiteWord: '香精煎鱼', date: '1679492958101', state: 'California' },
        { whiteWord: '只因', date: '1679592958101', state: 'California' },
        { whiteWord: '鸡', date: '1679692958101', state: 'California' },
        { whiteWord: '唉哟', date: '1679992958101', state: 'California' }
      ]
    },

    async deleteBlack(str: string) {
      // const res: any = await deleteBlack(str)
      // if (res.code === 200) {
      //   this.GetBlackList()
      // } else if (res.code === 400) {
      //   console.log('黑名单为空哦')
      // }

      // 查找黑名单并删除对应的数据
      const index = this.BlackList.findIndex(
        (item: any) => item.blackWord === str
      )
      this.BlackList.splice(index, 1)
      console.log('删除成功')
    },

    async deleteWhite(str: string) {
      // const res: any = await deleteWhite(str)
      // if (res.code === 200) {
      //   GetWhiteList()
      //   console.log('删除成功')
      // } else if (res.code === 400) {
      //   console.log('白名单为空哦')
      // }

      // 查找白名单并删除对应的数据
      const index = this.WhiteList.findIndex(
        (item: any) => item.whiteWord === str
      )
      this.WhiteList.splice(index, 1)

      console.log('删除成功')
    },

    async searchBlack(str: string) {
      const res: any = await selectABlack(str)
      if (res.code === 200) {
        return res.data
      } else if (res.code === 400) {
        this.BlackList = []
        console.log('没有找到诶')
      }
    },
    async searchWhite(str: string) {
      const res: any = await selectAWhite(str)
      if (res.code === 200) {
        return res.data
      } else if (res.code === 400) {
        this.WhiteList = []
        console.log('没有找到诶')
      }
    }
  }
})
