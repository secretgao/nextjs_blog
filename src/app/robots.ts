import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: 'Googlebot',
				allow: '/'
			},
			{
				userAgent: 'Applebot',
				allow: '/'
			},
			{
				userAgent: 'bingbot',
				allow: '/'
			},
			{
				userAgent: 'Baiduspider',
				allow: '/'
			},
			{
				userAgent: '*',
				allow: '/'
			}
		],
		sitemap: 'https://www.红鲤鱼与绿鲤鱼与驴.cn/sitemap.xml',
		host: 'https://www.红鲤鱼与绿鲤鱼与驴.cn'
	};
}
