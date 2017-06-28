<template>
	<div class="Register">
		<div class="Registermain">
			<div class="Registerinfo">
				<h3>
					<span :class="{active:actives}" @click="changactives">邮箱注册</span>
					<span :class="{active:!actives}" @click="changactives">手机号注册</span>	
				</h3>	
				<div class="emailform" v-show="actives">
					<input type="email" placeholder="请输入您的邮箱" class="emailinput">	
					<input type="text" placeholder="请输入密码" class="emailinput">	
					<input type="text" placeholder="请输再次输入密码" class="emailinput">	
					<p> <label @click="changemailSubmit"><input type="checkbox">&nbsp;&nbsp;我同意《某某某协议》</label></p>
					<div class="emailSubmit" :class="{active:changemail}">同意协议并注册</div>
				</div>
				<div class="phoneform" v-show="!actives">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:"Register",
	data(){
		return {
			actives:true,
			changemail:false
		}
	},
	methods:{
		changactives(){
			this.actives=!this.actives;
		},
		changemailSubmit(){
			this.changemail=!this.changemail;
		}
	}
}
</script>
<style>

.Register{
	width: 100%;
	height: 500px;
	min-width: 1200px;
	background: url(../../assets/img/Land_bg.jpg) no-repeat center top;
	background-size: auto 500px; 
}
.Registermain{
	width: 1200px;
	height: 500px;
	margin:0 auto;
	position: relative;
}
.Registerinfo{
	width: 392px;
	height: 410px;
	position: absolute;
	top: 44px;
	right: 145px;
	background: #fff;
	padding:0  30px;
}
.Registerinfo h3{
	margin-top: 13px;
	height: 96px;
	line-height: 96px;
	font-size: 18px;
	color: #9b9d9f;
	text-align: center;
	font-weight: 400;
}
.Registerinfo h3 span{
	width: 49%;
	display: inline-block;
	vertical-align: top;
	height: 58px;
	line-height: 58px;
}
.Registerinfo h3 .active{
	border-bottom: 3px solid #ff0000;
}
.emailinput{
	width: 100%;
	height: 38px;
	outline: none;
	border: 1px solid #dcdcdc;
	border-radius: 4px; 
	margin-bottom: 20px;
	color: #ccc;
	text-indent: 1em;
	font-size: 12px;
}
.emailSubmit{
	height: 46px;
	line-height: 46px;
	background: #ccc;
	color: #fff;
	font-size: 16px;
	border-radius: 4px;
	text-align: center;
	font-weight: 400;
	margin-top: 15px;
}
label{
	cursor:pointer;
}
.emailform .active{
	background: #ff0000;
}

</style>