// This file is generated by Sapper — do not edit it!
export const routes = [
	{ error: '4xx', load: () => import(/* webpackChunkName: "_4xx" */ '../../routes/4xx.html') },
	{ error: '5xx', load: () => import(/* webpackChunkName: "_5xx" */ '../../routes/5xx.html') },
	{ pattern: /^\/?$/, params: () => ({}), load: () => import(/* webpackChunkName: "_" */ '../../routes/index.html') },
	{ pattern: /^\/redirect\/?$/, params: () => ({}), load: () => import(/* webpackChunkName: "redirect" */ '../../routes/redirect.html') },
	{ pattern: /^\/wifi\/?$/, params: () => ({}), load: () => import(/* webpackChunkName: "wifi" */ '../../routes/wifi.html') }
];