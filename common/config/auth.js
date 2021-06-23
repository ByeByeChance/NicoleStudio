const withoutLoginPath = [
	'pages/index/index', 
	'pages/index/register',
	'pages/classification/classification',
	'pages/shoppingCar/shoppingCar'
]; //不需要登录路径

/**
 * 判断当前页面是否需要登录
 */
export const needLogin = (href = location.href) => {
	let result = withoutLoginPath.some(item => {
		return href.includes(item);
	});
	return !result;
};
