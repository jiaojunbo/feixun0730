//=>左右切换按钮
const BannerButton = {
	template: `<div>
	<a href="javascript:;" class="button-prev"></a>
	<a href="javascript:;" class="button-next"></a>
	</div>`,
	data() {
		return {}
	},

};
//=>分页器
const BannerPagination = {
	template: `<div class="pagination">
	<span></span>
	<span></span>
	<span></span>
</div>`,
	data() {
		return {}
	},
};
//=>轮播图组件
const BannerPlugin = {
	template: `<section class="container">
		<div class="wrapper">
		<div class="slide">
		<img src="./clint/images/banner01.png" alt="">
		</div>
		<div class="slide">
		<img src="./clint/images/banner02.png" alt="">
		</div>
		<div class="slide">
		<img src="./clint/images/banner03.png" alt="">
		</div>
		</div>
		<banner-pagination></banner-pagination>
		<banner-button></banner-button>
	</section>`,

	// =>传递属性的校验（当前轮播图组件支持的参数配置）
	props: {
		//=>轮播图的数据 [{id:1,pic:'xxx.png'},...]
		data: {
			type: Array,
			required: true
		},
		//=>初始展示索引
		initialslide: {
			type: Number,
			default: 0
		},
		//=>运动间隔（如果值为零则为不开起自动轮播）
		interval: {
			type: Number,
			default: 3000
		},
		//=>每一次运动动画的时间
		speed: {
			type: Number,
			default: 200
		},
		//=>是否设置分页器（默认一旦设定分页器，点击分页器也能实现切换）
		pagination: {
			type: Boolean,
			default: true
		},
		//=>是否设置左右导航
		button: {
			type: Boolean,
			default: true
		},
		//=>初始化成功的钩子函数
		init: {
			type: Function,
			default: Function.prototype
		},
		//=>切换完成后的钩子函数
		transitionend: {
			type: Function,
			default: Function.prototype
		}
	},

	components: {
		BannerPagination,
		BannerButton
	},

	data() {
		return {}
	}


};