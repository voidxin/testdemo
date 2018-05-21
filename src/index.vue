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
      <div style="width: 750px;" v-for="(content, i) in titleArray" :key="i">
             <div style="height: 350px;" v-if="i==0">
                 <slider  class="slider" :style="{height:350+'px',width:screenW+'px'}" auto-play="true">
                     <div v-for="src in posters">
                        <image v-bind:style="{height:350+'px',width:screenW+'px'}" resize="stretch" :src="src"></image>
                     </div>
                    <indicator style="position: absolute;left: 0;right: 0;bottom: 0;height: 60px;background-color: rgba(0, 0, 0, 0.3);itemColor: #DDDDDD;itemSelectedColor: rgb(0, 180, 255);"></indicator>
                 </slider>
                   
             </div>
              <!--  list列表 --->
              <list>
                  <cell v-for="i in dataArray" :key="i">
                      <div>
                      <div style="height: 200px;flex-direction:row;margin-top: 20px;">
                        <div  style="width:230px;margin-left:20px;">
                             <image style="width:230px;height:180px;" resize="stretch"  v-if="imageurl":src="imageurl"></image>
                        </div>
                        <div style="flex-direction: column;flex:1;margin-left: 20px;">
                             <div style="flex: 0.6;margin-right: 10px;">
                               <text style="color:black;font-size: 30px;">{{text}}</text>
                             </div>
                             <div style="flex:0.4;flex-direction:row;align-items: center;">
                                <div style="flex: 0.5;">
                                  <text style="color:gray;width: 80px;font-size: 24px">资讯</text>
                                </div>
                                <div style="flex: 0.5;margin-right: 10px;">
                                   <text style="color:gray;text-align: right;font-size: 24px;">10评论</text>
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
      imageurl:'https://cdn.dribbble.com/users/179241/screenshots/1829868/nerfwarrior_dribbble.png',
      text:'最新调查显示独立开发者最不喜欢Xbox平台,新闻新闻这是新闻是是是是是',
      titleArray:[{title:'头条',tcolor:'rgb(30,165,227)'},
              {title:'汽车科技',tcolor:'rgb(120,120,120)'},
              {title:'排行版',tcolor:'rgb(120,120,120)'},
              {title:'Apple',tcolor:'rgb(120,120,120)'},
              {title:'资讯',tcolor:'rgb(120,120,120)'},
             ],
      // titleArray:['头条','汽车科技','排行版','Apple','资讯'],
      dataArray:[1,2,3,4,5,6,7,6,6,6,6,4,3,2,1,2,2,2,3,3,3,33,3,3],
      posters: [
          'https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg',
          'https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg',
          'https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg',
          'https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg'
        ],
        pageArray:[1,2],
        screenW:750,
        screenH:0,
        activeTab: 0
    }
  },
  methods:{
      itemClick : function(i) {
        var self = this;
        self.activeTab = i;
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
