// 配置文件

const postsHeader = require('./post.header');
// const { sidebar: blogSidebar } = require('../data/blog');

module.exports = {
	base: '',
	title: '搬砖达人小王',
	description: '个人网站',
	themeConfig: {
		nav: [
			// { text: '主页', link: '/' },
			// { text: '博客', link: '/blog/' },
			// { text: '博客', link: '/blog/index.md' },
			{ text: '博客', link: '/post/blog/' },
			{
				text: 'Github',
				link: 'https://github.com/EricWong1994/blog',
			},
		],
		sidebar: {
			// ...blogSidebar,
			'/post/': postsHeader,
		},
		sidebarDepth: 2,
	},

	// plugins: [
	// 	(options, ctx) => {
	// 		return {
	// 			name: 'archive',
	// 			async additionalPages() {
	// 				return [
	// 					{
	// 						path: '/',
	// 						frontmatter: {
	// 							home: true,
	// 							// heroText: '',
	// 							// heroImage: 'logo.png',
	// 							// tagline: '技术博客',
	// 							actionText: '查看博客  →',
	// 							actionLink: '/post/blog/',
	// 							footer: '不要假装很努力，结果不会陪你演戏。',
	// 						},
	// 					},
	// 				];
	// 			},
	// 		};
	// 	},
	// ],
};
