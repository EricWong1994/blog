const postsHeader = require('./post.header');
// const { sidebar: blogSidebar } = require('../data/blog');

module.exports = {
	// base: '/',
	title: '吃核桃不吐皮儿',
	description: '个人网站',
	themeConfig: {
		nav: [
			// { text: '主页', link: '/' },
			// { text: '博客', link: '/blog/' },
			// { text: '博客', link: '/blog/index.md' },
			{ text: '博客', link: '/post/blog/' },
			{
				text: 'Github',
				link: 'https://github.com/EricWong1994/personal-website',
			},
		],
		sidebar: {
			// ...blogSidebar,
			'/post/': postsHeader,
		},
	},
	markdown: {
		// extractHeaders: ['h2', 'h3', 'h4'],
		extractHeaders: ['h1', 'h2', 'h3'],
	},
};
