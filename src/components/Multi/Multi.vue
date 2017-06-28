<template>
	<div class="Multi">
		<!-- 多级功能页 -->
		<div class="multi">
			<div class="multi_tit">
				<i>图标</i> > <span>母婴用品</span>
			</div>
			<div class="multi_jieguo">
				<p>共计<span>412</span>个结果</p>
			</div>
			<div class="multi_option">
		    	<div class="multi_option_child">
		    		<span>品牌：</span>
		    		<ul>
		    			<li class='active'>不限</li>
		    			<li>爱他美</li>
		    		</ul>
		    	</div>
		    	<div class="multi_option_child">
		    		<span>价格：</span>
		    		<ul>
		    			<li class='active'>不限</li>
		    			<li>爱他美</li>
		    		</ul>
		    	</div>
		    	<div class="multi_option_child">
		    		<span>排序：</span>
		    		<ul>
		    			<li class='active'>综合排序</li>
		    			<li>销量  ↓</li>
		    			<li>评论数  ↓</li>
		    			<li>价格  ↓</li>
		    		</ul>
		    	</div>
			</div>
			<div class="multi_product">
				<dl class='proActive'>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
			</div>
			<div class="multi_fenyeqi">
				<!-- 分页器 -->
				<mu-pagination class='fenye' :total="total" :current="current" @pageChange="handleClick">
		  		</mu-pagination>
			</div>
			<div class="multi_groom">
				<div class="multi_groom_tit">
					<ul>
						<li class='tjActive'></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<b>精品推荐</b>
				</div>
				<dl class='proActive'>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>
						<img src="../../assets/img/f-2_03.png" alt="">
					</dt>
					<dd>
						<ol>
							<li>
								<img src="../../assets/img/f-2_07.png" alt="">
							</li>
							<li><span>中国</span></li>
						</ol>
						<ul>
							<li><span>奶嘴奶嘴奶嘴</span></li>
							<li><b>￥50.67</b></li>
						</ul>
					</dd>
				</dl>
			</div>
			
		</div>
	</div>
</template>
<script>
export default{
	name:"Multi",
	data () {
    	return {
      		total: 500,
      		current: 1,
      		pageSize: 30 // 每页条数
    	}
  	},
  	methods: {
   		handleClick (newIndex) {
   			alert(newIndex)
    	}
  	}
}
</script>
<style scope=scope>
	i{
		font-style: normal;
	}
	.multi{
		width: 1200px;
		height:auto;
		margin:0 auto;
	}
	.multi_tit{
		margin: 18px 0;
	}
	.multi_jieguo{
		border-bottom: 1px #000 solid;
	}
	.multi_jieguo p{
		margin:6px 0 8px 0;
		color:#999;
		font-size: 12px;
	}
	.multi_jieguo p span{
		color:#ef4e4e;
	}
	.multi_option{
		margin-bottom: 40px;
	}
	.multi_option_child{
		height: 45px;
		line-height: 45px;
		border-bottom: 1px #e3e3e3 solid;
		clear: both;
	}
	.multi_option_child span{
		float: left;
		margin-right:30px;
		padding-left: 3px;
	}
	.multi_option_child ul{
		float: left;
	}
	.multi_option_child ul li{
		display: inline;
		padding:5px;
		margin-right: 16px;
		color:#777;
	}
	.multi_option_child ul li.active{
		border:1px #0085d7 solid;
		color:#0085d7;
	}
	.multi_product{
		overflow: hidden;
		border-bottom: 1px #ddd solid;
		padding-bottom: 20px;
		margin-bottom: 18px;
	}
	.multi_product dl,.multi_groom dl{
		width: 236px;
		height: 308px;
		border:1px #e3e3e3 solid;
		overflow: hidden;
		margin-bottom: 14px;
		margin-right: 4px;
		float: left;
	}
	.multi_product dl.proActive,.multi_groom dl.proActive{
		border:1px #b0b0b0 solid;
	}
	.multi_product dl dd,.multi_groom dl dd{
		padding:0 10px;
	}
	.multi_product dl dd ul,.multi_groom dl dd ul{
		float: left;
		width: 156px;
	}
	.multi_product dl dd ul li span,.multi_groom dl dd ul li span{
		color:#999;
	}
	.multi_product dl dd ul li b,.multi_groom dl dd ul li b{
		color:#fe6001;
	}
	.multi_product dl dd ol,.multi_groom dl dd ol{
		float: right;
	}
	.multi_product dl dd ol li span,.multi_groom dl dd ol li span{
		color:#ccc;
		font-size: 12px;
	}
	.multi_fenyeqi{
		width: 100%;
		height: 60px;
		margin-bottom: 48px;
	}
	.fenye{
		width: 50%;
		margin:0 auto;
	}
	.multi_groom{
		overflow: hidden;
	}
	.multi_groom_tit{
		border-bottom: 1px #ddd solid;
		height: 48px;
		line-height: 48px;
		margin-bottom: 16px;
	}
	.multi_groom_tit b{
		font-size: 20px;
		padding-left: 18px;
		border-left: 3px #fe6001 solid;
	}
	.multi_groom_tit ul{
		width: 130px;
		height: 20px;
		float: right;
		background: #f8f8f8;
		border-radius: 20px;
		padding-left: 20px;
		margin-top:8px;
	}
	.multi_groom_tit ul li{
		width: 10px;
		height: 10px;
		float: left;
		border:2px #9b9b9b solid;
		border-radius: 50%;
		margin-top:5px;
		margin-right: 16px;
	}
	.multi_groom_tit ul li.tjActive{
		background: #fe6001;
		border-color: #fe6001;
	}
	.multi_groom dl{
		margin-bottom: 0;
	}
</style>