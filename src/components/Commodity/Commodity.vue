<template>
	<div class="Commodity" >
		<div class="Commodity_banner">
			<div class="swiper-container" ref="swiper_container">
				<div class="swiper-wrapper">
				    <div class="swiper-slide"><a href="javascript:;"></a></div>
				    <div class="swiper-slide"><a href="javascript:;"></a></div>
				    <div class="swiper-slide"><a href="javascript:;"></a></div>
				</div>
				 <div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="Commodity_main">
			<div class="titlelines">
				<div class="titlelist">
					<div class="line"></div>
					<div class="text">会员专区</div>
					<div class="line"></div>
				</div>
				<p>每天一点小期待</p>
			</div>
			<p>dafbagatbafbadf</p>
		</div>
	</div>
</template>
<script>
import Swiper from "swiper";
export default{
	name:"Commodity",
	created(){
		this.$nextTick(() => {
			 this.one();
		})
	},
	methods:{
		one() {
			this.mySwiper = new Swiper(this.$refs.swiper_container, {
				autoplay: 2000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				// effect : 'fade',
				loop:true

			})
		}
	}
}
</script>
<style>


@import  '../../assets/css/swiper.min.css';
.Commodity_banner{
	width: 100%;
	min-width: 100%;
	height: 480px;
	border-top: 1px solid #fe6001;
}
.swiper-container{
	height: 100%;
	width: 100%;
}
.swiper-slide{
	background: #fff;
	text-align: center;
}
.swiper-slide a{
	display: inline-block;
	width: 100%;
	height: 100%;
	background-image:url('../../assets/img/banner_one.png');
	background-repeat: no-repeat;
	background-position: center;
}
.swiper-pagination-bullet{
	background: #fff;
	width: 10px;
	height: 10px;
}
.swiper-pagination-bullet-active{
	background: #9e6a70;
}
.Commodity_main{
	width: 1200px;
	padding: 0 16px;
	margin: 0 auto;
	background: #fff;
}
.titlelines{
	height: 128px;
}
.titlelines p{
	padding-top: 21px;
	color: #818080;
	font-size: 16px;
	text-align:center

}
.titlelines .titlelist {
	padding-top: 32px;
	display: flex;
	width: 95%;
	margin:0 auto;
}
	
.titlelines .titlelist .line {
	flex: 1;
	position: relative;
	top: -13px;
	border-bottom: 1px solid #dcdcdc;
}
	
.titlelines .titlelist .text {
	padding: 0 12px;
	font-size: 28px;
	font-weight: 700;
}

</style>



