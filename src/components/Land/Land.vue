<template>
	<div class="Land">
		<div class="Landmain">
			<div class="landinfo">
				<h3>账号登陆</h3>
				<div class="Landfrom">
					<input typt="text" id="name" class="wibai landone" placeholder="输入您的账号或用户名">
					<input type="password" id="password" class="wibai landone" value="输入您的密码">
					<p>
						<input type="text" id="code" class="landone" value="输入您的验证码">
						<img src="../../assets/img/Land_Verification_code.jpg" class="land_ver_code">
					</p>
					<div class="Submit wibai">登陆</div>
					<p class="Register_link"><router-link to="/Register">不是会员？马上登陆</router-link></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:"Land"
}
</script>
<style>
.Land{
	width: 100%;
	height: 500px;
	min-width: 1200px;
	background: url(../../assets/img/Land_bg.jpg) no-repeat center top;
	background-size: auto 500px; 
}
.Landmain{
	width: 1200px;
	height: 500px;
	margin:0 auto;
	position: relative;
}
.landinfo{
	width: 392px;
	height: 410px;
	position: absolute;
	top: 44px;
	right: 145px;
	background: #fff;
}
.landinfo h3{
	margin-top: 13px;
	height: 96px;
	line-height: 96px;
	font-size: 18px;
	color: #9b9d9f;
	text-align: center;
	font-weight: 400;
}
.landinfo .Landfrom{
	padding:0 29px;
}
.wibai{
	width: 100%;
}
.landone{
	height: 38px;
	outline: none;
	border: 1px solid #dcdcdc;
	border-radius: 4px; 
	margin-bottom: 20px;
	color: #ccc;
	text-indent: 1em;
	font-size: 12px;
}
.land_ver_code{
	float: right;
	width: 47%;
	
}
#code{
	display: inline-block;
	vertical-align: top;
	width: 47%;
	position: relative;
	top: 6px;

}
.Submit{
	height: 46px;
	line-height: 46px;
	background: #ff0000;
	color: #fff;
	font-size: 16px;
	border-radius: 4px;
	text-align: center;
	font-weight: 400;
	margin-top: 15px;
}
.Register_link{
	padding-top: 17px;

}.Register_link a{
	color: #4d4d4d;
	font-size: 12px;
}
</style>