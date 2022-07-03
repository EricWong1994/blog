// import blogSidebar from './data/blog';
const { sidebar: blogSidebar } = require('../data/blog');
console.log('blogSidebar: ', blogSidebar);

module.exports = {
	// base: '/',
	title: '吃核桃不吐皮儿',
	description: '个人网站',
	themeConfig: {
		nav: [
			// { text: '主页', link: '/' },
			// { text: '博客', link: '/blog/' },
			// { text: '博客', link: '/blog/index.md' },
			{ text: '博客', link: '/pages/blog/index.md' },
			{
				text: 'Github',
				link: 'https://github.com/EricWong1994/personal-website',
			},
		],
		sidebar: {
			...blogSidebar,
		},
	},
};
