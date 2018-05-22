<template>
  <div >
   <!--  头部标题logo -->
    <div style=" height: 88px;position: absolute;right: 0;left: 0;top: 0;">
      <div  style="justify-content: center;align-items: center; flex: 1">
        <!--  <text style="text-align: center;color: rgb(30,165,227);font-size: 40px;font-weight:500;"> 太平洋电脑网 </text> -->
        <image style="width: 300px;height: 40px;" src="http://7xwl0f.com1.z0.glb.clouddn.com/pconline_top_title@2x.png"></image>
      </div>
      
      <div style="position: absolute;right: 25px;top: 20px;">
        
        <image style="height:40px;width: 40px;" resize="stretch" src="http://7xwl0f.com1.z0.glb.clouddn.com/btn_search_icon@2x.png"></image>
      </div>

    </div>
    <div style="height: 1px;background-color: rgb(240,240,240);margin-top: 90px;">
    </div>

    <!-- item分类 --> 
    <div style="flex-direction: row;">
       <div v-for="(content, i) in titleArray" :key="i"  @click="itemClick(i)" style="height: 88px;justify-content: center;">
          <div style="justify-content: center;align-items: center;width: 150px;height: 60px;">
             <text class="title":style="{color:content.tcolor}">{{content.title}}</text>
          </div>
       </div>

    </div>
    <div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
      <div style="width: 750px;" v-for="(group, i) in dataArray" :key="i">
             
              <!--  list列表 --->
              <list>
                  <cell style="" v-if="i==0">
                       <slider  class="slider" :style="{height:400+'px',width:screenW+'px'}" auto-play="true">
                         <div v-for="(imageDic,i) in focus":key="i">
                            <image v-bind:style="{height:400+'px',width:screenW+'px'}" resize="stretch" :src="imageDic.image"></image>
                         </div>
                       </slider>

                  </cell>
                  <cell v-if="i==0">
                     <slider  class="slider" :style="{height:60+'px',width:screenW+'px'}" auto-play="true">
                         <div v-for="(imageDic,i) in focus":key="i" style="flex-direction: row;justify-content: center;height: 60px;align-items: center;">
                           <text style="font-size: 31px; margin-left: 15px;flex: 0.9;height: 40px;" lines="1" text-overflow="ellipsis">{{imageDic.title}}</text>
                               <text style="font-size: 33px; margin-right: 15px;flex: 0.1;align-items: right">{{i+1}}/{{focus.length}}</text>
                         </div>
                       </slider>
                      <BottomLine/> 
                  </cell> 

                  <cell v-for="(article,i) in group" :key="i" @click="jump">
                      <div>
                      <div style="height: 200px;flex-direction:row;margin-top: 20px;">
                        <div  style="width:230px;margin-left:20px;">
                             <image style="width:230px;height:180px;" resize="stretch" :src="article.image"></image>
                        </div>
                        <div style="flex-direction: column;flex:1;margin-left: 20px;">
                             <div style="flex: 0.6;margin-right: 10px;">
                               <text style="color:black;font-size: 30px;">{{article.title}}</text>
                             </div>
                             <div style="flex:0.4;flex-direction:row;align-items: center;">
                                <div style="flex: 0.5;">
                                  <text style="color:gray;width: 160px;font-size: 24px">{{article.channelName}}</text>
                                </div>
                                <div style="flex: 0.5;margin-right: 10px;">
                                   <text style="color:gray;text-align: right;font-size: 24px;">{{article.cmtCount}} 评论</text>
                                </div>
                             </div>
                        </div> 
                       </div>
                     </div> 
                  <!-- 华丽的分割线 -->
                   <BottomLine/> 
                 </cell> 
              </list> 
          </div>

    </div>






  
  </div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BottomLine from './components/BottomLine.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    BottomLine
  },
  data () {
    return {
      dataURL:'https://mrobot.pconline.com.cn/v2/cms/channels/999?pageNo=1&pageSize=20',
      titleArray:[{title:'头条',tcolor:'rgb(30,165,227)'},
              {title:'汽车科技',tcolor:'rgb(120,120,120)'},
              {title:'排行版',tcolor:'rgb(120,120,120)'},
              {title:'Apple',tcolor:'rgb(120,120,120)'},
              {title:'资讯',tcolor:'rgb(120,120,120)'},
             ],
      // titleArray:['头条','汽车科技','排行版','Apple','资讯'],
      clickFlag:20,
      articleList: [
    {
      "channelId": "000053137",
      "channelName": "智能家电",
      "cmtCount": 0,
      "id": "11240390",
      "image": "http://img0.pconline.com.cn/pconline/1805/21/g_11240390_1526897707526.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "相信这段时间以来大家都被《复仇者联盟3：无限战争》刷屏了吧！这部号称“布局十年，巅峰一役”的漫威十周年电影在宣传阶段就饱受大家期待，国内上映晚于其他地区两周，更是吊足大家胃口。电影一上映，作为漫威粉的小编就拖着几个朋友去看了IMAX。小编对这部电影总的评价就是：剧情很精彩，结局很那啥，IMAX值回票价！",
      "title": "钢铁侠同款变身公事箱？这款扫地机器人竟如此酷炫",
      "url": "http://family.pconline.com.cn/1124/11240390.html"
    },
    {
      "channelId": "000094805",
      "channelName": "资讯",
      "cmtCount": 0,
      "id": "11243566",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/11243566_a04f8ac6d4a02f3_thumb.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "在与镁光联手推出企业级 QLC SSD 的同时，英特尔也宣布了两家公司将合作开发 96 层 3D QLC 闪存的消息。 IMFT 的 3D NAND 合作可追溯到 2015 年初，展示现在想要进一步推动相关技术的发展 —— 将单片容量从当前 64 层 QLC 的 1-Tbits（12",
      "title": "英特尔宣布与镁光联手开发96层3D QLC闪存",
      "url": "http://news.pconline.com.cn/1124/11243566.html"
    },
    {
      "channelId": "000094828",
      "channelName": "资讯",
      "cmtCount": 0,
      "id": "11243567",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/11243567_293a883e3f42bac_thumb.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "爱奇艺近日宣布开通正式在广东中山市开通首家线下私人影院品牌“娱刻”。爱奇艺将在中国的一线二线城市开展线下电影院，为消费者提供点播娱乐体验。爱奇艺高级副总裁杨向华表示将为线下用户提供顶级的影音体验并扩展公司的业务，海量的线上用户将帮助其达成目标。",
      "title": "爱奇艺首家线下私人影院“娱刻”开幕 采用杜比音效",
      "url": "http://news.pconline.com.cn/1124/11243567.html"
    },
    {
      "channelId": "000094784",
      "channelName": "资讯",
      "cmtCount": 0,
      "id": "11243624",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/11243624_s_ffb694758c3741c595f97a75d4436b8d_thumb.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "5月22日， 一加6将在今天10点在官网、京东正式发售。价格方面，一加6 6GB+64GB版售价3199元（亮瓷黑），8GB+128GB版售价3599元（全配色），8GB+256GB版售价3999元（墨岩黑），漫威复仇者联盟限量版（8GB+256GB）售价4199元。",
      "title": "一加6手机首销：搭载骁龙845，售价3199元起",
      "url": "http://news.pconline.com.cn/1124/11243624.html"
    },
    {
      "channelId": "000021298",
      "channelName": "",
      "cmtCount": 0,
      "id": "11241908",
      "image": "http://img0.pconline.com.cn/pconline/1805/21/g_11241908_1526898512140.png",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "三星于北京悠唐购物中心举办“用芯 AI家”体验发布会，三星旗下首款，同时也是与京东联合开发的人工智能（AI）电视产品——三星AI电视70A京东特别版今日起正式发售，中国电子视像行业协会副秘书长彭健锋先生、AVC奥维云网副总裁董敏先生、三星电子大中华区副总裁刘峻光先生、三星电子大中华区电商事业部总经理申振旭先生、京东家电黑电事业部总经理杨子盛先生、京东平台智能业务部总经理周炯先生等嘉宾出席此次发布会，并共同开启三星AI电视70A京东特别版的发售仪式。",
      "title": "“用芯”打造“AI家”——三星AI电视70A京东特别版正式发售",
      "url": "http://family.pconline.com.cn/1124/11241908.html"
    },
    {
      "channelId": "000010523",
      "channelName": "DIY外设",
      "cmtCount": 4,
      "id": "11234385",
      "image": "http://img0.pconline.com.cn/pconline/1805/18/g_11234385_1526639459213.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "又到了一年一度电脑圈最重要最盛大的节日——台北电脑展（COMPUTEX TAIPEI），也是我们DIY频道每年最忙但又最兴奋的节点之一，毕竟有可能会看到全球最新最顶尖的科技产品，但又不得不跑断腿地一个馆一个馆地去试玩、体验、拍素材，这样才能给你们带来第一手的现场资料啊。台北电脑展向来都是各大相关厂商发布新品的优秀舞台，那今年我们会期待的是什么呢？",
      "title": "在DIY玩家的天堂台北展上 最值得关注的是啥？",
      "url": "http://diy.pconline.com.cn/1123/11234385.html"
    },
    {
      "channelId": "000094828",
      "channelName": "资讯",
      "cmtCount": 0,
      "id": "11243318",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/g_11243318_1526951331682.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "近日，工业和信息化部下属机构国家无线电办公室发布消息表示，为了推进5G系统的频率使用许可工作，加快5G商用部署，避免5G系统对同频段或邻频段内依法开展的其他无线电业务产生有害干扰，国家无线电办公室决定开展相关频段的卫星地球站等无线电台（站）清理核查工作。",
      "title": "5G倒计时！国家无线电办公室清理核查5G频段无线电台",
      "url": "http://news.pconline.com.cn/1124/11243318.html"
    },
    {
      "channelId": "000047032",
      "channelName": "企业圈",
      "cmtCount": 56,
      "id": "11218845",
      "image": "http://img0.pconline.com.cn/pconline/1805/15/g_11218845_1526349794661.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月19日",
      "summary": "这些年随着云计算、大数据技术的快速发展，用户已经从过去的互联网时代快速进入到了信息高速发展的时代，尤其是对于技术的创新所带来的用户使用体验的改变也正在影响着我们。",
      "title": "互联网还可信吗?用户对于隐私的顾虑怎样打消",
      "url": "http://servers.pconline.com.cn/1121/11218845.html"
    },
    {
      "channelId": "000047032",
      "channelName": "企业圈",
      "cmtCount": 2,
      "id": "11243365",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/g_11243365_1526950224395.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "5月17日下午，由北京大学光华管理学院和华为生态大学联合举办的“聚中国创造之力，携手未来”主题论坛暨华为-北京大学光华管理学院战略合作签约仪式在北京大学举行。会上，华为与光华管理学院宣布达成战略合作。双方将在创新研究、人才培养和教育信息化等方面展开深入合作，共同推动ICT前沿领域的发展和人才生态建设。华为EBG中国区总裁蔡英华、光华管理学院院长刘俏代表双方进行签约。华为董事，战略Marketing总裁徐文伟、华为EBG中国区副总裁杨文池、刘超，光华管理学院党委书记马化祥、光华管理学院副院长张影教授等出席了签约仪式。",
      "title": "华为联手北大光华管理学院 推动创新人才建设",
      "url": "http://servers.pconline.com.cn/1124/11243365.html"
    },
    {
      "channelId": "000047453",
      "channelName": "企业圈",
      "cmtCount": 2,
      "id": "11238004",
      "image": "http://img0.pconline.com.cn/pconline/1805/20/g_11238004_1526819705875.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "就在上周，ARM宣布与中国国内一起成立合资公司，共同开拓国内芯片行业的快速发展，对于这家合资公司来说，中方占股51%，ARM占股49%，从投资者比例上来说，国内一方对于这家芯片合资企业占有很大程度上的话语权。",
      "title": "跨界合作趋势 中国芯片这次是否真的能一飞冲天",
      "url": "http://servers.pconline.com.cn/1123/11238004.html"
    },
    {
      "channelId": "000094824",
      "channelName": "资讯",
      "cmtCount": 0,
      "id": "11243310",
      "image": "http://img0.pconline.com.cn/pconline/1805/22/11243310_s_4acd64b78d264994bb94893b72acc19e_thumb.jpg",
      "imageHor": "",
      "informationType": 1,
      "pubDate": "5月22日",
      "summary": "一项最新研究表明： WiFi、2G/3G/4G网络和电线构成的全球通讯系统所产生的电磁辐射，会对植物、昆虫、鸟类和其它动物产生威胁。",
      "title": "电磁辐射会对植物、昆虫、鸟类和其它动物产生威胁",
      "url": "http://news.pconline.com.cn/1124/11243310.html"
    }],
      focus:[
    {
      channelId: "000051876",
      channelName: "",
      counter: "",
      id: "11237704",
      image: "http://img0.pconline.com.cn/pconline/notebook/culture/qwzt/1805/01_1.jpg",
      informationType: 1,
      pubDate: "2018-05-21",
      title: "第14个季度出货量下滑!PC市场的拐点何时到来?",
      url: "http://notebook.pconline.com.cn/1123/11237704.html"
    },
    {
      channelId: "000051876",
      channelName: "",
      counter: "",
      id: "11213445",
      image: "http://img0.pconline.com.cn/pconline/acc/mouse/reviews/1805/1280.jpg",
      informationType: 1,
      pubDate: "2018-05-21",
      title: "哪家鼠标用的更舒服？三大鼠标厂商驱动全面对比解析",
      url: "http://acc.pconline.com.cn/1121/11213445.html"
    },
    {
      channelId: "000051876",
      channelName: "",
      counter: "",
      id: "11225365",
      image: "http://img0.pconline.com.cn/pconline/mobile/review/1805/02.jpg",
      informationType: 1,
      pubDate: "2018-05-21",
      title: "moto 青柚1s评测：年轻人的高颜值社交手机",
      url: "http://mobile.pconline.com.cn/1122/11225365.html"
    },
    {
      channelId: "000051876",
      channelName: "",
      counter: "",
      id: "11230148",
      image: "http://img0.pconline.com.cn/pconline/mobile/review/1805/025.jpg",
      informationType: 1,
      pubDate: "2018-05-17",
      title: "OnePlus 6上手评测:性能狂飙,外观意料之中却有惊喜",
      url: "http://mobile.pconline.com.cn/1123/11230148.html"
    },
    {
      channelId: "000051876",
      channelName: "",
      counter: "",
      id: "11208448",
      image: "http://img0.pconline.com.cn/pconline/digital/family/cul/1805/1280_1.jpg",
      informationType: 1,
      pubDate: "2018-05-17",
      title: "你究竟还要缴多少智商税？家用体脂秤到底靠不靠谱？",
      url: "http://family.pconline.com.cn/1120/11208448.html"
    }
    
  ],
        pageArray:[1,2],
        dataArray:[],
        screenW:750,
        screenH:0,
        activeTab: 0
    }
  },
  methods:{
    loadPath:function(pageName){
      const page = getUrlParam('page');
      const entrys = getUrlParam('entrys');
      function getUrlParam (key) {
        var reg = new RegExp('[?|&]' + key + '=([^&]+)')
        var match = location.search.match(reg)
        return match && match[1]
      }
      function createQRCode (url) {
        var $QR = document.querySelector('#qrcode')
        var QR = qrcode(0, 'L')
        url += '?_wx_tpl=' + url
        $QR.setAttribute('href', url)
        QR.addData(url)
        QR.make()
        $QR.innerHTML = QR.createImgTag(6, 12)
      }
      if (page) {
        var $preview = document.querySelector('#preview')
        $preview.src = `/${page.replace('.js', '.html')}`;
      }
      if (entrys) {
        var pageEntrys = decodeURI(entrys).replace('\\', '/').split('|');
        var $pages = document.querySelector('.pages-box');
        var contents = '';
        pageEntrys.forEach(function(entry){
          if (entry === getUrlParam('page').replace('.js', '')) {
            contents += `<a href="?page=${entry}.js&entrys=${entrys}" class="page-item active">${entry}</a>`
          }
          else {
            contents += `<a href="?page=${entry}.js&entrys=${entrys}" class="page-item">${entry}</a>`
          }
        })
        $pages.innerHTML = contents;
      }
      var host = window.location.host;
      var path = `http://${host}/dist/${page || pageName}`
      return path;
    },
      itemClick : function(i) {
        var self = this;
        self.activeTab = i;
        //防止重复点击
        if (self.clickFlag == i) {
          return;
        }
        self.clickFlag = i;
        var content = self.titleArray[i];
        content.tcolor = 'rgb(30,165,227)';
        self.titleArray[i] = content;
        for (var a = 0; a < self.titleArray.length; a++) {
         if (i != a) {
           var content = self.titleArray[a];
           content.tcolor = 'rgb(120,120,120)';
           self.titleArray[a] = content;
         }
        }

       
      

      },
      jump () {
        var navigator = weex.requireModule('navigator')
        var self = this;
        self.toast('dianji')
        navigator.push({
          url:"",
          animated: 'true'
        })
        
        
      },
      requestData : function(articleType){
         var stream = weex.requireModule('stream')
           var modal = weex.requireModule('modal')
          var self = this

         //头条
        if (articleType == 0) {
          self.dataURL = 'https://mrobot.pconline.com.cn/v2/cms/channels/999?pageNo=1&pageSize=20';
        }
        if (articleType == 1) {
          //汽车科技
          self.dataURL = 'http://mrobot.pcauto.com.cn/xsp/s/auto/info/cms/technologyList.xsp?pageNo=1&pageSize=20';
        }
        if (articleType == 2) {
          //排行版
          self.dataURL = 'https://mrobot.pconline.com.cn/v2/cms/channels/18';
        }

          var GET_URL =   self.dataURL;
          //self.toast('加载数据中...')
          stream.fetch({
            method: 'GET',
            url: GET_URL,
            type: 'json'
          }, function(ret) {  
            if (typeof ret == 'string') {
              ret = JSON.parse(ret)
            }
            if (!ret.ok) {
              //self.toast('获取数据失败')
               
               self.dataArray[0] = self.articleList;
               self.dataArray[1] = self.articleList;
               self.dataArray[2] = self.articleList;
               self.dataArray[3] = self.articleList;
               self.dataArray[4] = self.articleList;

            } else {
              
              //var dataStr =  JSON.stringify(ret.data);
              if (articleType == 1) {
                //汽车科技
                 // self.articleList = ret.data.data;
                
                 self.dataArray[1] = ret.data.data;
              }else if(articleType == 0){
                self.focus = ret.data.focus;
                self.articleList = ret.data.articleList;
                self.dataArray[0] =  self.articleList;
              }else {
                self.articleList = ret.data.articleList;
                 self.dataArray[2] =  self.articleList;
                  self.dataArray[3] =  self.articleList;
                   self.dataArray[4] =  self.articleList;
               
              }
              
               
            }
          },function(response){
           
          });
        
      },
      toast: function(msg, duration) {
       
        var modal = weex.requireModule('modal')
        var self = this;
        duration = duration || 2;
        modal.toast({
          'message': msg,
          'duration': duration
        });

      }
       
  },
  created:function() {
       
       var self = this;
       var config = self.$getConfig();
       //宽度
      //在5s或se上获取的宽度用在slider上有bug，宽度不够
      /*
      if(config.env.deviceWidth == 640){
        self.screenW = 750;
      }else{
        self.screenW = config.env.deviceWidth;
      }

      self.screenH = config.env.deviceHeight;
      console.log(self.screenW);
      */
       self.dataArray[0] = self.articleList;
       self.requestData(0);
       self.requestData(1);
       self.requestData(2);
       self.requestData(3);
       self.requestData(4);

       


  },
  ready: function (){
       
  }
}
</script>

<style scoped>
  .tab-panels {
    position: relative;
    width: 3750;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #F5F5F5;
    transition: left 0.2s ease-in-out;
  }
  .title {
    font-size: 32px;
  }
</style>
