# ess_web

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



****************************************  项目介绍  ****************************************


*     git下拉地址：git@github.com:manchang6/ess_web.git
      git每个人有一个分支，分支名为自己姓名的全拼  如（wangmanchang）

一、  项目结构介绍
- ess_web
	.babelrc                ------ babel编译参数，编译vue、es6等
	.editorconfig           ------ 定义代码格式
	.gitgnore               ------ git上传配置(需要忽略的文件格式)
	.postcssrc.js
	build                   ------ webpack、server配置
	config                  ------ vue基本配置文件
	index.html              ------ 项目入口页面
	node_modules            ------ 项目依赖
	package.json            ------ 安装页面配置文件
	README.md               ------ 项目介绍
	- src                   ------ 源码文件夹
		App.vue             ------ vue入口页
		- assets            ------ 静态资源
			css             ------ 页面样式文件(css)
			img             ------ 图片资源(img)
			js              ------ 页面逻辑交互文件(js)
			plugins         ------ 组件、框架、库目录
		- components        ------ vue页面开发文件
			index.vue       ------ 主页面
			login.vue       ------ 登陆页面
			***.vue         ------ 等等，其他页面
		main.js             ------ 入口配置文件
		router              ------ 路由配置文件
	static                  ------ html链接外部文件资源


二、  运用技术栈
	vue、museUI、webpack

三、  运行项目
	在ess_web目录命令行
		npm install            ------ 安装项目依赖
		npm run dev            ------ 前端开发命令，启动server
		npm run bulid          ------ 打包线上web包

		localhost:8080         ------ 本地预览地址

四、  开发注意
	1.node_modules依赖 mac、windows需要分别安装运行
	2.开发新页面需要在components中新建vue文件，在router／index.js中定义文件
	3.在写页面样式css、js交互尽量写着当前.vue文件中，避免写在src/assets/css 或/js中，避免重叠
	4.页面开发规范根据 index.vue、login.vue 的规范来开发
	5.链接外部文件：
		*.css文件    在 <style> 中用 @import ''
		*.js文件     在 <script> 中用 require('')
		*.vue文件    在 <script> 中用 import NAME from ''
		其他文件      也可以 <script> 中 import NAME from ''
	6.不需要上传node_modules到git上
	7.页面之间传递数据需要和相对页面的负责人沟通

五、  需求
	1.每个页面都要实现模块化开发
	2.前台后台实现分离
	3.主要兼容   safari、firfox、chrome、ie10+ 
	4.不要轻易改写公共文件，如必须需要改写需提前提出
	5.编写公共组件 (如：图片懒加载、图片轮播)需要在最后return或者export
	6.数据目前在本地写死，等接口出了之后在换


六、 其他
	还有不清楚的可以直接联系   王满昌(kevin)
	手机/微信：15010530879
	 QQ：1771229602



