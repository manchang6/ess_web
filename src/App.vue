<template>
  <div id="app">
    <router-view></router-view>
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
        if(!this.userInfo) {
          this.$router.push('/index')
        }else{
          this.$router.push("/login")
      } 
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
         佛祖保佑       永无BUG
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
</style>
