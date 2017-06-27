<template>
  <div id="app">
      <div class="controller_top">
        <nav>
          <ul>
            <li><a href="javascript:;">注册</a><span>|</span><a href="javascript:;">登陆</a></li>
            <li><a href="javascript:;">我要开店</a></li>
            <li><a href="javascript:;">个人中心</a></li>
          </ul>
        </nav>
      </div> 
      <div class="search_nav">
        <div class="logo">
          <img src="./assets/img/logo.png">
        </div>
        <div class="search_view">
          <div class="lefts">
            <div class="search">
              <input type="text" placeholder="请输入关键词搜索商品">
              <input type="button" value="搜 索">
            </div>
            <ul>
              <li>蔬菜</li>
              <li class="active">水果</li>
              <li>酱油</li> 
              <li class="active">面包</li> 
              <li>卫生纸</li> 
              <li>苹果</li>  
              <li>牛肉</li> 
              <li>麻辣烫</li> 
              <li>过桥米线</li> 
            </ul>
          </div>
          <div class="rights">
              <div>我的购物车</div>
              <div>升级会员</div>
          </div>
        </div>
      </div>
      <nav class="main_nav">
        <ul>
          <li>所有商品分类</li>
          <li><router-link to="/Commodity">    商品首页 </router-link> </li>
          <li><router-link to="/Newgoods">    新品上市 </router-link></li>
          <li><router-link to="/Selling">     口碑热卖 </router-link></li>
          <li><router-link to="/Discount">    特惠专区 </router-link></li>
          <li><router-link to="/Lifeservice"> 生活服务 </router-link></li> 
          <li><router-link to="/Aboutus">     关于我们 </router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
      <footer class="footer">
        <div class="main">
          <div class="lefts">
            <ul>
              <li>关于我们</li>
              <li>物流配送</li>
              <li>售后服务</li>
              <li>帮助中心</li>
            </ul>
            <img src="./assets/img/logo.png">
            <p></p>
          </div>
          <div class="rights">
            <img src="./assets/img/QR_code.png">
            <p>联系方式</p>
            <p>0100-3744686</p>
          </div>
        </div>
      </footer>
  </div>
    

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userInfo:true
    }
  },
  mounted: function(){
    this.init();
  },
  methods: {
    init: function(){
        this.checkLogin();
    },
    checkLogin(){
        //是否进入登陆页面
      //   if(!this.userInfo) {
      //     this.$router.push('/index')
      //   }else{
      //     this.$router.push("/login")
      // } 
    }

  }
}
/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         浩哥保佑       永无BUG
*/
</script>

<style>

blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul {margin:0;padding:0}    
h1,h2,h3,h4,h5,h6 {font-size:100%}    
address,cite,dfn,em,var {font-style:normal}    
code,kbd,pre,samp {font-family:courier new,courier,monospace}    
small {font-size:12px}    
ol,ul {list-style:none}    
a {text-decoration:none}    
a:hover {text-decoration:underline}    
sup {vertical-align:text-top}    
sub {vertical-align:text-bottom}    
legend {color:#000}    
fieldset,img {border:0}    
button,input,select,textarea {font-size:100%}    
table {border-collapse:collapse;border-spacing:0}  
body{width:100%;}

  .controller{
    width: 100%;
    min-width: 1200px;
  }
  .controller_top{
    width: 100%;
    height: 32px;
    background: #eeeeee;
  }
  .controller_top nav{
    height: 32px;
    width: 1200px;
    margin: 0 auto;
  }
  .controller_top nav ul{
    float: right;
    height: 32px;
  }
  .controller_top nav ul li{
    float: left;
  }
  .controller_top nav ul li span{
    line-height: 32px;
   }
  .controller_top nav ul li a {
    display: inline-block;
    color: #1c0404;
    padding: 0 7px;
    font-size: 10px;
    height:32px;
    line-height: 32px;
  }
  .search_nav{
    height: 140px;
    width: 1200px;
    margin: 0 auto;
  }
  .search_nav .logo{
    float: left;
    width: 130px;
    margin-top: 38px;
  }
  .search_nav .logo .img{
    width: 1100%;
    display: inline-block;
  }
  .search_nav .search_view{
    float:right;
    width: 890px;
    padding-top: 40px;
  }
  .search_nav .search_view .lefts{
    float: left;
    width: 590px;
  }
  .search_nav .search_view .lefts .search{
      height: 45px;
      width: 590px;
      background: #fe6001;
  }
  .search_nav .search_view .lefts .search input{
    border:none;
    display: inline-block;
    vertical-align: top;
    outline:none;
  }
  .search_nav .search_view .lefts .search input:first-child{
    height: 41px;
    width: 474px;
    margin-top: 2px;
    margin-left: 2px;
    text-indent: 2em;
    font-size: 16px;
    color: #8a8888;
  }
  .search_nav .search_view .lefts .search input:last-child{
    height: 100%;
    width: 105px;
    background: none;
    font-size:20px;
    color: #fff;
  }
  .search_nav .search_view .lefts ul{
   
  }
  .search_nav .search_view .lefts ul li{
    float: left;
    padding:12px 10px;
    color: #413f40;
    font-size: 12px;
  }
 .search_nav .search_view .lefts ul .active{ 
    color:#fe6001;
  }
 .search_nav .search_view .rights{
    width:164px;
    float: right;
 }
 .search_nav .search_view .rights div{
    height: 42px;
    line-height: 42px;
    width: 100%;
    background: #fe6001;
    margin-bottom: 2px;
    text-align: center;
    font-size:16px;
    color: #fff;

 }

.main_nav{
  width: 1200px;
  margin: 0 auto;
  height: 45px;
}
.main_nav  ul li{
  float: left;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
.main_nav ul li:first-child{
  padding:  0 40px;
  background: #fe6001;
  color: #fff;
}
.main_nav ul li a{ 
  height: 45px;
  padding:  0 25px;
  color: #333333;
}

.main_nav ul li a:hover {
  text-decoration: none;
}
.footer{
  width: 100%;
  height: 340px;
  background: #eeeeee;
}
.footer .rights{
  float: right;
  margin-right: 80px;
  margin-top: 24px;
  width: 143px;
}
.footer .rights p{
  font-size:12px;
  color: #000;
  padding-top: 30px;
};
.footer .main{
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.footer .lefts{
  float: left;
  padding-top: 58px;
}
.footer .lefts img{
  display: inline-block;
  width: 75px;
  margin-left: 15px;
  margin-top: 60px;
}
.footer .lefts ul{
  height: 36px;
}
.footer .lefts ul li{
  float: right;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  color: #000;
  padding-right: 30px;
}
</style>
